const url = "https://oducity.github.io/wdd231/chamber/data/members.json";

const cards = document.querySelector("#cards");
const heroBox = document.querySelector("#hero-box");

const hamburgerBtn = document.getElementById("ham-btn");
const navBtn = document.getElementById("nav-bar");

const navList = document.querySelectorAll("a");//This target and store all <a> element in navList variable
const h1 = document.querySelector("h1");


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

/************** Display random members of Edo chamber of commerce ************/

function displayHeroImages(heros){
    heros.forEach(hero => {
        let img = document.createElement("img");
        img.setAttribute("src", hero.imageUrl);
        img.setAttribute("alt", "Chamber of commerce image.");
        img.setAttribute("loading", "lazy");
        heroBox.appendChild(img);
    });
};

getCompaniesData();

async function getCompaniesData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);   //this helpin viewing large amount of data in a table in the console.
    displayCompaniesData(data.companies);
};


function displayCompaniesData(companies){

    companies.forEach((company) => {
        let companySlot = document.createElement("section");
        companySlot.setAttribute("class", "slot");
        if (company.rating > 1) {

            let companyName = document.createElement("h2"); // fullname containner
            companyName.setAttribute("class", "company-name")

            let tag = document.createElement("p"); //Tag container
            tag.setAttribute("class", "tag");

            let infoBox = document.createElement("div"); // Company information box
            infoBox.setAttribute("class", "info-box");

            let addressP = document.createElement("p"); // address box
            addressP.setAttribute("class", "address");

            let phoneP = document.createElement("p"); // Phone number box
            phoneP.setAttribute("class", "phone");

            let emailBox = document.createElement("p"); //Company email address containner
            emailBox.setAttribute("class", "email");
            emailBox.innerHTML = `<strong>Email:</strong> ${company.email}`;


            let urlAnchor = document.createElement("a"); // Web address anchor link
            urlAnchor.setAttribute("href", "#");
            urlAnchor.innerText = company.url;
            let companyUrl = document.createElement("p"); // Url anchor containner
            companyUrl.setAttribute("class", "url");


            //store company's name object in a variable "name"
            let name = company.name;
            companyName.innerText = name;//Paces name in the element variable "companyName"
            companySlot.appendChild(companyName);

            tag.innerText = company.companytag;
            companySlot.appendChild(tag);


            // Creates Image and its attributes
            let portrait = document.createElement("img");
            let imgAlt = `Photo of ${name}`;
            portrait.setAttribute("src", company.imageurl);
            portrait.setAttribute("alt", imgAlt);
            portrait.setAttribute("loading", "lazy");
            portrait.setAttribute("width", "80px");
            portrait.setAttribute("heigth", "auto");

            infoBox.appendChild(portrait);

            infoBox.appendChild(emailBox);

            phoneP.innerHTML = `<strong>Phone:</strong> ${company.phone}`;
            infoBox.appendChild(phoneP);

            companyUrl.appendChild(urlAnchor);
            infoBox.appendChild(companyUrl);

            companySlot.appendChild(infoBox);

        };
        cards.appendChild(companySlot);
    });
};