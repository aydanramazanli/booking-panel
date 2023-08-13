
  
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
  
    //  create staffImages
    const detail = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = servicesItem.image;
    detail.appendChild(imgElement);
    serviceList.appendChild(detail);
    // create staffDetail
    const serviceDetail = document.createElement("div");
    const serviceName = document.createElement("h2");
    const serviceTime = document.createElement("p");
    const servicePrice= document.createElement("h3");
    serviceName.textContent = servicesItem.name;
    serviceTime.textContent = servicesItem.duration;
    servicePrice.textContent=servicesItem.price
    serviceDetail.appendChild(serviceName);
    serviceDetail.appendChild(serviceTime);
    serviceDetail.classList.add("detail");
    serviceList.appendChild(serviceDetail);
    serviceList.appendChild( servicePrice);
    detail.appendChild(serviceDetail);
  
    // added details
    services.appendChild(serviceList);
  
  
    serviceList.addEventListener("click", function() {
      console.log(serviceName.textContent);
      localStorage.setItem("service_id", servicesItem.id);
  });
  });
  