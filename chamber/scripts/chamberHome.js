const url = "https://oducity.github.io/wdd231/chamber/data/members.json";
const awardUrl = "https://oducity.github.io/wdd231/chamber/data/members.json";

//Create required variables for the weather url.
const myKey = "595df96ec4974ae93556a6fd7e848f50";
const myLat = "6.33";
const myLong = "5.62";

// create the weather url
const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

/********************** Select all element in the Events box **********************/
const eventcards = document.querySelector("#event-cards");

/********************** Select all elements for current weather display ***********************/
const weatherIcon = document.querySelector("#w-logo");
const currentCity = document.querySelector("#city");
const temp = document.querySelector("#temp");
const myDescription = document.querySelector("#my-description");
const highTemp = document.querySelector("#temp-high");
const lowTemp = document.querySelector("#temp-low");
const humid = document.querySelector("#humid");
const sunRise = document.querySelector("#sunrise");
const sunSet = document.querySelector("#sunset");

/******************* Select all alements for more days forecast ***********************/
const today = document.querySelector("#today");
const dayTwo = document.querySelector("#day-two");
const dayThree = document.querySelector("#day-three");
const dayFour = document.querySelector("#day-four");
const dayFive = document.querySelector("#day-five");


const cards = document.querySelector("#cards");
const heroBox = document.querySelector("#hero-box");
const newsCards = document.querySelector("#news");

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

getApiData(url);
getApiData(weatherUrl);
getAwardApi(awardUrl);

async function getApiData(arr) {
    try {
        const response = await fetch(arr);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            //console.table(data.prophets);   //this helpin viewing large amount of data in a table in the console.
            if (!data.companies) {
                displayWeatherData(data);
            } else if (data.companies) {
                displayCompaniesData(data.companies);
            }

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
};

async function getAwardApi(arr) {
    try {
        const response = await fetch(arr);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayAward(data.companies);
        };
    } catch (error) {
        console.log(error);
    };
};


function displayCompaniesData(companies){

    //let randomCompanies = Math.floor(Math.random() * companies.length);
    let filteredCompanies = companies.filter((company) => company.membership > 1);

    const threeCompanies = getRandomCompanies(filteredCompanies, 3)
    threeCompanies.forEach((comp) => {
        
        let companySlot = document.createElement("section");
        companySlot.setAttribute("class", "slot");

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
        emailBox.innerHTML = `<strong>Email:</strong> ${comp.email}`;


        let urlAnchor = document.createElement("a"); // Web address anchor link
        urlAnchor.setAttribute("href", "#");
        urlAnchor.innerText = comp.url;
        let companyUrl = document.createElement("p"); // Url anchor containner
        companyUrl.setAttribute("class", "url");


        //store company's name object in a variable "name"
        let name = comp.name;
        companyName.innerText = name;//Paces name in the element variable "companyName"
        companySlot.appendChild(companyName);

        tag.innerText = comp.companytag;
        companySlot.appendChild(tag);


        // Creates Image and its attributes
        let portrait = document.createElement("img");
        let imgAlt = `Photo of ${name}`;
        portrait.setAttribute("src", comp.imageurl);
        portrait.setAttribute("alt", imgAlt);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "80px");
        portrait.setAttribute("heigth", "auto");

        infoBox.appendChild(portrait);

        infoBox.appendChild(emailBox);

        phoneP.innerHTML = `<strong>Phone:</strong> ${comp.phone}`;
        infoBox.appendChild(phoneP);

        companyUrl.appendChild(urlAnchor);
        infoBox.appendChild(companyUrl);

        companySlot.appendChild(infoBox);

        cards.appendChild(companySlot);
    
    });
};


function getRandomCompanies(arr, count) {
    const compArrey = arr;
    const result = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * compArrey.length);

        const selectedIndex = compArrey.splice(randomIndex);
        result.push(selectedIndex);
    }
    return result;
}


/********************** news and weather ************************/


function displayWeatherData(data) {
    console.log("Hello");

    currentCity.innerText = data.name;
    let iconAddress = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("src", iconAddress);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    temp.innerHTML = `<strong>${data.main.temp}&degC`;
    myDescription.innerText = data.weather[0].description;
    highTemp.innerHTML = `High: ${data.main.temp_max}&degC`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&degC`;
    humid.innerHTML = `${data.main.humidity}%`;
    sunRise.innerHTML = data.sys.sunrise;
    sunSet.innerHTML = data.sys.sunset;
};

function displayDaysData(data) {

};


/************** Events code starts here ***************/

function displayAward(companies) {
    let filteredawards = companies.filter((company) => company.award);
    filteredawards.forEach((company) => {
        eventcards.innerHTML = "";
        let count = 0;
        let awardCard = document.createElement("div");
        awardCard.setAttribute("class", "award-card");
        
        let companyLogo = document.createElement("img");
        companyLogo.setAttribute("SRC", company.imageurl);
        companyLogo.setAttribute("alt", `logo of ${company.name}`);
        companyLogo.setAttribute("loading", "lazy");
        companyLogo.setAttribute("width", "70px");
        companyLogo.setAttribute("height", "70px");

        let companyName = document.createElement("h3");
        companyName.innerText = company.name;

        let awardSpan = document.createElement("span");
        awardSpan.innerHTML = `<strong>${company.award}</strong>`;

        awardCard.appendChild(companyLogo);
        awardCard.appendChild(companyName);
        awardCard.appendChild(awardSpan);

        eventcards.appendChild(awardCard);

        for (let i = 0; i < 1000; i++){
            count++;
        }
        count = 0;
    });
};
