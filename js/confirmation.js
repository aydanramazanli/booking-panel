const staffName = document.getElementById("staff-data");
const serviceName = document.getElementById("service-data");
const time = document.getElementById("time-data");
const price = document.getElementById("price-data");
const userName = document.getElementById("name");
const userLastName = document.getElementById("lastName");
const userMail = document.getElementById("email");
const userNumber = document.getElementById("number");
const saveBtn = document.getElementById("confirmBtn");

staffName.textContent = localStorage.getItem("staff");
serviceName.textContent = localStorage.getItem("service");
price.textContent = "$" + localStorage.getItem("servicePrice");
const date= localStorage.getItem("selectedDate")
const times= localStorage.getItem( "time")
time.textContent= date + " " + times

saveBtn.addEventListener("click", () => {
  const customer = {
    name: userName.value,
    lastName: userLastName.value,
    mail: userMail.value,
    number: userNumber.value,
  };
  
  localStorage.setItem("customer" , JSON.stringify(customer))
});

//modal

const modalContent = document.getElementById("notification")
const modal = document.getElementById("modal")
const close = document.getElementById("closeModal")


saveBtn.addEventListener("click", () => {
  if (userName.value === "" && userLastName.value === "" && userMail.value === "" && userNumber.value === "") {
    modal.style.display = "block";
    modalContent.innerHTML = "Please, fill the all required fields!";
    modalContent.style.color = "#F39C12";
  }
});

saveBtn.addEventListener("click", () => {
  if (userName.value != "" && userLastName.value != "" && userMail.value != "" && userNumber.value != "" && staffName.textContent !="" && serviceName.textContent !="" &&  price.textContent!="" && time.textContent!="") {
    modal.style.display = "block";
    modalContent.innerHTML = "Confirmation successfully completed!";
    modalContent.style.color = "#38CF78";
    console.log(localStorage)
  }
});

close.addEventListener("click", ()=>{
  modal.style.display="none"
})


///////////////////////////////




