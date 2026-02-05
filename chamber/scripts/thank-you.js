const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const thanksBox = document.querySelector("#thanks-box");
const pageHead = `Registration Completed`;

const hamburgerBtn = document.getElementById("ham-btn");
const navBtn = document.getElementById("nav-bar");

const navList = document.querySelectorAll("nav a");//This target all <a> elements within the <nav> element and store store them in navList variable.
const homePage = document.getElementById("home-pg");
const discoveryPage = document.getElementById("discovery-pg");
const directoryPage = document.getElementById("directory-pg");
const joinUsPage = document.getElementById("join-pg");
const aboutPage = document.getElementById("about-pg");


hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("show");
    navBtn.classList.toggle("show");
});

// Code for way finder 
addClassName(navList);

function addClassName(allClass) {
    
    allClass.forEach(navItem => {
        
        navItem.addEventListener("click", () => {
            
            h1.innerText = navItem.innerText;
            navItem.classList.toggle("current");
            //This remove the className "way" from all anchor elements.
            navList.forEach(nava => {
                nava.classList.remove("way");
            });
            //This add the className "way" to the current anchor element for wayfinder use in css.
            navItem.classList.add("way");
        });
    });
};



function desplayFormData (data) {
    const dataBox = document.createElement("div");
    dataBox.setAttribute("class", "databox");

    const pageHeader = document.querySelector("#thankyou-head");
    pageHeader.setAttribute("class" ,"thankyou-head");
    
    const instruction = document.createElement("p");
    instruction.setAttribute("class", "instruction");
    instruction.innerText = `Your registration information is as follows:`;

    const firstName = data.get(`first-name`);
    const firstNameBox = document.createElement("P");
    firstNameBox.setAttribute("class", "firstname");
    firstNameBox.innerHTML = `<strong>First Name</strong>: <span>${firstName}</span>`;

    const lastName = data.get(`last-name`);
    const lastNameBox = document.createElement("p");
    lastNameBox.setAttribute("class", "lastname");
    lastNameBox.innerHTML = `<strong>Last Name</strong>: <span>${lastName}</span>`;

    const email = data.get(`email`);
    const emailBox = document.createElement("p");
    emailBox.setAttribute("class", "email");
    emailBox.innerHTML = `<strong> Your Email</strong>: <spans>${email}</span>`;

    const phone = data.get(`phone`);
    const phoneBox =document.createElement("p");
    phoneBox.setAttribute("class", "phone");
    phoneBox.innerHTML = `<strong>Phone</strong>: <span>${phone}</span>`;

    const businessTitle = data.get(`business-title`);
    const businessTitleBox = document.createElement("p");
    businessTitleBox.setAttribute("class", "btitle");
    businessTitleBox.innerHTML = `<strong>Your Business Title</strong>: <span>${businessTitle}</span>`;

    const businessName = data.get(`business-name`);
    const businessNameBox = document.createElement("p");
    businessNameBox.setAttribute("class", "bname");
    businessNameBox.innerHTML = `<strong>Your Business Name</strong>: <span>${businessName}</span>`;

    const membershipLevel = data.get(`membership-level`);
    const membershipBox = document.createElement("p");
    membershipBox.setAttribute("class", "membership");
    membershipBox.innerHTML = `<strong>Membership</strong>: <span>${membershipLevel}</span>`;

    const description = data.get(`description`);
    const descriptionBox = document.createElement("p");
    descriptionBox.setAttribute("class", "descriptio");
    descriptionBox.innerHTML = `<strong>Your Business Description</strong>: <span>${description}</span>`;

    const appreciation = document.createElement("p");
    appreciation.setAttribute("class", "appreciation");
    appreciation.innerHTML = `Thank you <strong>${firstName}</strong> <strong>${lastName}</strong> for registring your company "<strong>${businessName}</strong>" with us.`;

    dataBox.appendChild(instruction);
    dataBox.appendChild(firstNameBox);
    dataBox.appendChild(lastNameBox);
    dataBox.appendChild(emailBox);
    dataBox.appendChild(phoneBox);
    dataBox.appendChild(businessTitleBox);
    dataBox.appendChild(businessNameBox);
    dataBox.appendChild(membershipBox);
    dataBox.appendChild(descriptionBox);

    
    pageHeader.innerText = pageHead;
    thanksBox.appendChild(appreciation);
    thanksBox.appendChild(dataBox);

}

desplayFormData(urlParams);

