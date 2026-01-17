// Declare a variable to store the url string
const url = "https://oducity.github.io/wdd231/chamber/data/members.json";

// Declare a variable to store the target html element
const cards = document.querySelector("#cards");

const hamburgerBtn = document.getElementById("ham-btn");
const navBtn = document.getElementById("nav-bar");

const navList = document.querySelectorAll("a");//This target and store all <a> element in navList variable
const h1 = document.querySelector("h1");

//Grab grid-btn and list-btn classes and store in gridBtn and listBtn variables respectively for grid/list toggle view.
const gridBtn = document.getElementById("grid-btn");
const listBtn = document.getElementById("list-btn");

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
}

// Add eventListener() method to add and remove class name for list/grid display

listBtn.addEventListener("click", () => {
    cards.classList.add("display-list");
    gridBtn.classList.remove("blue");
    listBtn.classList.add("blue")
});

gridBtn.addEventListener("click", () => {
    cards.classList.remove("display-list");
    listBtn.classList.remove("blue");
    gridBtn.classList.add("blue");
});


// Create async function to fecth from the JSON source url using await fetch() method.

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);   //this helpin viewing large amount of data in a table in the console.
    displayCompaniesData(data.companies);
};

getCompaniesData();

const displayCompaniesData = (companies) => {
    companies.forEach((company) => {
        let memberStar;
        if (company.rating === 5) {
            memberStar = `\u2605\u2605\u2605\u2605\u2605`;
        } else if (company.rating === 4) {
            memberStar = `\u2605\u2605\u2605\u2605\u2606`;
        } else if (company.rating === 3) {
            memberStar = `\u2605\u2605\u2605\u2606\u2606`;
        } else if (company.rating === 2) {
            memberStar = `\u2605\u2605\u2606\u2606\u2606`;
        } else {
            memberStar = `\u2605\u2606\u2606\u2606\u2606`;
        }

        let membershipLevel = "member";

        if (company.membership === 1) {
            membershipLevel = "Member";
        } else if (company.membership === 2) {
            membershipLevel = "Silver";
        } else {
            membershipLevel = membershipLevel;
        }

        let companySlot = document.createElement("section");
        companySlot.setAttribute("class", "slot");

        let companyName = document.createElement("h2"); // formerly fullname
        companyName.setAttribute("class", "company-name")

        let addressP = document.createElement("p"); // formerly birthDatePara
        addressP.setAttribute("class", "address");

        let phoneP = document.createElement("p"); // formerly placeOfBirthPara
        phoneP.setAttribute("class", "phone");

        let statusP = document.createElement("p"); //Creted <p> element for company status.
        statusP.setAttribute("class", "status-p");

        let urlAnchor = document.createElement("a");
        urlAnchor.setAttribute("href", "#");
        urlAnchor.innerText = company.url;
        let companyUrl = document.createElement("p");
        companyUrl.setAttribute("class", "url");


        //store object's company in a variable "name"
        let name = company.name;
        companyName.innerText = name;//Paces name in the element variable "companyName"
        // Creates Image and its attributes
        let portrait = document.createElement("img");
        let imgAlt = `Photo of ${name}`;
        portrait.setAttribute("src", company.imageurl);
        portrait.setAttribute("alt", imgAlt);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "250px");
        portrait.setAttribute("heigth", "auto");

        companySlot.appendChild(portrait);

        
        companySlot.appendChild(companyName);

        addressP.innerText = `Address: ${company.address}`;
        companySlot.appendChild(addressP);

        phoneP.innerText = `Phone: ${company.phone}`;
        companySlot.appendChild(phoneP);

        statusP.innerText = `Membership: ${membershipLevel} || Rating: ${memberStar}`;
        companySlot.appendChild(statusP);

        companyUrl.appendChild(urlAnchor);
        companySlot.appendChild(companyUrl);

        cards.appendChild(companySlot);
    });
};

