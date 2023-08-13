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

// const services = [
//   {
//     id: 1,
//     name: "Oral hygiene",
//     image: "../images/service3.png",
//     duration: "1 hour",
//     price: 50.0,
//   },
//   {
//     id: 2,
//     name: "Implants",
//     image: "../images/service3.png",
//     duration: "1 hour 30 minutes",
//     price: 120.0,
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


  staffList.addEventListener("click", function() {
    console.log(staffName.textContent);
    localStorage.setItem(" staff_id", staffItem.id);
});
});
