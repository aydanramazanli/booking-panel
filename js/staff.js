const staff = [
  {
    id: 1,
    name: "Alex Rosetta",
    email: "alexyrosetta@egmail.com",
    image: "../images/staff1.png",
  },

  {
    id: 2,
    name: "Maria July",
    email: "mariajuly@egmail.com",
    image: "../images/staff2.png",
  },
];

staff.forEach((staffItem) => {
  const staffs = document.getElementById("stafflist");
  // create staffList
  const staffList = document.createElement("li");
  staffList.classList.add("staff");

  //  create staffImages
  const staffImages = document.createElement("div");
  const imgElement = document.createElement("img");
  imgElement.src = staffItem.image;
  staffImages.appendChild(imgElement);
  staffList.appendChild(staffImages);
  // create staffDetail
  const staffDetail = document.createElement("div");
  const staffName = document.createElement("h2");
  const staffMail = document.createElement("p");
  staffName.textContent = staffItem.name;
  staffMail.textContent = staffItem.email;
  staffDetail.appendChild(staffName);
  staffDetail.appendChild(staffMail);
  staffDetail.classList.add("detail");
  staffList.appendChild(staffDetail);

  // added details
  staffs.appendChild(staffList);
  // select staff
  const selectList = document.querySelectorAll(".staff");
  const modal = document.querySelector(".modal");
  const nextBtn = document.getElementById("step1");

  selectList.forEach((selected) => {
    selected.addEventListener("click", () => {
      selectList.forEach((option) => {
        option.style.border = "none";
      });
      selected.style.border = "2px solid #53D56C";
      modal.style.display = "none";
      window.location.pathname = "../service.html";
    });
  });

  const myStaff = localStorage.getItem("staff");
 
    const isAnySelected = Array.from(selectList).some(
      (option) =>option.childNodes[1].firstChild.textContent === myStaff? option.style.border="2px solid #53D56C": ''
    );
 
 

  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!isAnySelected) {
      modal.style.display = "flex";
    }
  });

  // added localstorage
  staffList.addEventListener("click", function () {
    localStorage.setItem("staff_id", staffItem.id);
    localStorage.setItem("staff", staffItem.name);
  });
});
