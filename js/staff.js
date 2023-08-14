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

// const date = ["2022-03-04", "2022-03-05", "2022-03-06"];
// const time = [
//   {
//     start_time: "09:00",
//     end_time: "09:30",
//   },
//   {
//     start_time: "09:30",
//     end_time: "10:00",
//   },
// ];

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

  const selectList = document.querySelectorAll(".staff");
  selectList.forEach((selected) => {
    selected.addEventListener("click", () => {
      selectList.forEach((option) => {
        option.style.border = 0;
      });
      selected.style.border = "1px solid #53D56C";
    });
  });

  staffList.addEventListener("click", function () {
    localStorage.setItem(" staff_id", staffItem.id);
    localStorage.setItem("staff", staffItem.name);
  });
});
