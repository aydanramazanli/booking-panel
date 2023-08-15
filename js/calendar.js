function generate_year_range(start, end) {
  var years = "";
  for (var year = start; year <= end; year++) {
    years += "<option value='" + year + "'>" + year + "</option>";
  }
  return years;
}

today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

createYear = generate_year_range(1970, 2050);
/** or
 * createYear = generate_year_range( 1970, currentYear );
 */

document.getElementById("year").innerHTML = createYear;

var calendar = document.getElementById("calendar");
var lang = calendar.getAttribute("data-lang");

var months = "";
var days = "";

var monthDefault = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var dayDefault = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

if (lang == "en") {
  months = monthDefault;
  days = dayDefault;
} else {
  months = monthDefault;
  days = dayDefault;
}

var $dataHead = "<tr>";
for (dhead in days) {
  $dataHead += "<th data-days='" + days[dhead] + "'>" + days[dhead] + "</th>";
}
$dataHead += "</tr>";

//alert($dataHead);
document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function jump() {
  currentYear = parseInt(selectYear.value);
  currentMonth = parseInt(selectMonth.value);
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  var firstDay = new Date(year, month).getDay();

  tbl = document.getElementById("calendar-body");

  tbl.innerHTML = "";

  monthAndYear.innerHTML = months[month] + " " + year;
  selectYear.value = year;
  selectMonth.value = month;

  // creating all cells
  var date = 1;
  for (var i = 0; i < 6; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        cell = document.createElement("td");
        cellText = document.createTextNode("");
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth(month, year)) {
        break;
      } else {
        cell = document.createElement("td");
        cell.setAttribute("data-date", date);
        cell.setAttribute("data-month", month + 1);
        cell.setAttribute("data-year", year);
        cell.setAttribute("data-month_name", months[month]);
        cell.className = "date-picker";
        cell.innerHTML = "<span>" + date + "</span>";

        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.className = "date-picker selected";
        }
        row.appendChild(cell);
        date++;
      }
    }

    tbl.appendChild(row);
  }
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

//selected days
const myDays = document.getElementsByTagName("tr");
const modal = document.querySelector(".times");
const modalContent = document.querySelector(".content");

const maxSelectedDays = 1;
let selectedDays = [];

for (let i = 0; i < myDays.length; i++) {
  const days = myDays[i].getElementsByTagName("td");
  for (let j = 0; j < days.length; j++) {
    days[j].addEventListener("click", () => {
      const clickedDay = parseInt(days[j].getAttribute("data-date"), 10);
      const clickedMonth = parseInt(days[j].getAttribute("data-month"), 10);
      const clickedYear = parseInt(days[j].getAttribute("data-year"), 10);
      const selectedDate = new Date(clickedYear, clickedMonth - 1, clickedDay+1);

    
      const formattedDate = selectedDate.toISOString().split("T")[0];


      // localStorage'a tarihi yazdır
      localStorage.setItem("selectedDate", formattedDate);

      const myDay= localStorage.getItem("selectedDate")
      const myTime= localStorage.getItem("time")
      console.log(myDay, myTime);
    //   const isAnySelected = Array.from(selectList).some((option) =>
    //   option.childNodes[0].childNodes[1].childNodes[0].textContent === myService
    //     ? (option.style.border = "2px solid #53D56C")
    //     : ""
    // );

      if (selectedDays.includes(j)) {
        const index = selectedDays.indexOf(j);
        if (index > -1) {
          selectedDays.splice(index, 1);
        }

        days[j].addEventListener("click", () => {
          modal.style.display = "block";
          modalContent.innerHTML = "01:00 -02:00";
          modalContent.addEventListener("click", () => {
            modal.style.backgroundColor = "#53D56C";
            modalContent.style.color = "white";
            window.location.pathname="../confirm.html"
            localStorage.setItem("time", modalContent.innerHTML);
          });
        });

        days[j].style.backgroundColor = "";
        days[j].style.color = "";
      } else if (selectedDays.length < maxSelectedDays) {
        selectedDays.push(j);
        days[j].style.backgroundColor = "#6c70dc";
        days[j].style.color = "white";
      }

      nextBtn.addEventListener("click", () => {});

      for (let k = 0; k < days.length; k++) {
        if (!selectedDays.includes(k)) {
          days[k].style.backgroundColor = "rgba(200, 201, 204, 0.301)";
          days[k].style.color = "";
        }
      }

      selectedDays.forEach((index) => {
        days[index].style.pointerEvents = "none";
      });
    });
  }
}
var modalSelect = document.querySelector(".modal");
var nextBtn = document.getElementById("step3");

if (localStorage.time ===  undefined) {
  nextBtn.addEventListener("click", () => {
    modalSelect.style.display = "flex";
  });
} 
