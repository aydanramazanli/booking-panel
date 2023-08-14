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

saveBtn.addEventListener("click", () => {
  const customer = {
    name: userName.value,
    lastName: userLastName.value,
    mail: userMail.value,
    number: userNumber.value,
  };
  
  localStorage.setItem("customer" , JSON.stringify(customer))
});
