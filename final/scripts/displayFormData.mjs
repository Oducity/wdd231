


export function displayFormData(data) {
    data.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    })
    const confirmBox = document.querySelector("#confirm-box");

    const infoRecieved = document.createElement("p");
    infoRecieved.innerText = `Information received is as follows;`;
    confirmBox.appendChild(infoRecieved);


    const cusBox = document.createElement("section");
    cusBox.setAttribute("class", "cusbox");

    const firstH2 = document.createElement("h2");
    firstH2.innerText = "Your Information";
    cusBox.appendChild(firstH2);

    const firstName = data.get(`firstname`);
    const lastName = data.get(`lastname`);
    const cusNameH2 = document.createElement("p");
    cusNameH2.setAttribute("class", "name-head");
    cusNameH2.innerHTML = `<strong>Full Name</strong>: ${firstName} ${lastName}`;
    cusBox.appendChild(cusNameH2);

    const email = data.get(`email`);
    const emailBox = document.createElement("p");
    emailBox.setAttribute("class", "email");
    emailBox.innerHTML = `<strong>Email</strong>: ${email}`;
    cusBox.appendChild(emailBox);

    const phoneNum = data.get(`phone`);
    const phone = document.createElement("p");
    phone.setAttribute("class", "phone");
    phone.innerHTML = `<strong>Phone</strong>: ${phoneNum}`;
    cusBox.appendChild(phone);




    const materialBox = document.createElement("section");
    materialBox.setAttribute("class", "matBox");

    const materialH2 = document.createElement("h2");
    materialH2.setAttribute("class", "mat-head");
    materialH2.innerText = `Your Requested Materials`;
    materialBox.appendChild(materialH2);

    const materialType = data.get(`roof`);
    const material = document.createElement("p");
    material.setAttribute("class", "material");
    material.innerHTML = `<strong>Products</strong>: ${materialType}`;
    materialBox.appendChild(material);

    const RequestedColor = data.get(`roof-color`);
    const color = document.createElement("p");
    color.setAttribute("class", "roof-color");
    color.innerHTML = `<strong>Color</strong>: ${RequestedColor}`;
    materialBox.appendChild(color);

    const guageValue = data.get(`guage`);
    const guage = document.createElement("p");
    guage.setAttribute("class", "guage");
    guage.innerHTML = `<strong>Guage</strong>: ${guageValue}mm`;
    materialBox.appendChild(guage);

    const meterValue = data.get(`total-meter`);
    const totalMeter = document.createElement("p");
    totalMeter.setAttribute("class", "total");
    totalMeter.innerHTML = `<strong>Total Meter</strong>: ${meterValue} meters`;
    materialBox.appendChild(totalMeter);

    const timeStamp = document.createElement("p");
    timeStamp.setAttribute("class", "form-time");
    const timeStampValue = data.get("timestamp");
    timeStamp.innerHTML = `You place your request on ${timeStampValue}`;
    materialBox.appendChild(timeStamp);
    

    confirmBox.appendChild(cusBox)
    confirmBox.appendChild(materialBox);
    const appreciation = document.createElement("p");
    appreciation.innerHTML = `We at Unicon Aluminum and Solar Solution sincerely appreciate you ${firstName} ${lastName} for your request.<strong> Our customer agent will contact you as soon as possible.</strong>.`;
    confirmBox.appendChild(appreciation);


};