

  const services = [
    {
      id: 1,
      name: "Oral hygiene",
      image: "../images/service3.png",
      duration: "1 hour",
      price: 50.0,
    },
    {
      id: 2,
      name: "Implants",
      image: "../images/service2.png",
      duration: "1 hour 30 minutes",
      price: 120.0,
    },
  ];
  
  services.forEach((servicesItem) => {
    const services = document.getElementById("service-list");
    // create serviceList
    const serviceList = document.createElement("li");
    serviceList.classList.add("service");
  
    //  create serviceImages
    const detail = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = servicesItem.image;
    detail.appendChild(imgElement);
    serviceList.appendChild(detail);
    // create serviceDetail
    const serviceDetail = document.createElement("div");
    const serviceName = document.createElement("h2");
    const serviceTime = document.createElement("p");
    const servicePrice= document.createElement("h3");
    serviceName.textContent = servicesItem.name;
    serviceTime.textContent = servicesItem.duration;
    servicePrice.textContent= "$"+servicesItem.price
    serviceDetail.appendChild(serviceName);
    serviceDetail.appendChild(serviceTime);
    serviceDetail.classList.add("detail");
    serviceList.appendChild(serviceDetail);
    serviceList.appendChild( servicePrice );
    detail.appendChild(serviceDetail);
  
    // added details
    services.appendChild(serviceList);

    const nextBtn = document.getElementById('step2')
    const modal = document.querySelector(".modal");
 
  
    const selectList = document.querySelectorAll(".service");
    selectList.forEach((selected) => {
      selected.addEventListener("click", () => {
        selectList.forEach((option) => {
          option.style.border = 0;
        });
        selected.style.border = "1px solid #53D56C";
        window.location.pathname="../date.html"
      });
    });

    const isAnySelected = Array.from(selectList).some(
      (option) => option.style.border === "2px solid green");
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault()
      if (!isAnySelected) {
        modal.style.display = "flex";
      }
     
    });

    serviceList.addEventListener("click", function() {
      console.log(serviceName.textContent);
      localStorage.setItem("service_id", servicesItem.id);
      localStorage.setItem("service", servicesItem.name);
      localStorage.setItem("servicePrice", servicesItem.price);
  });
  });
  

  