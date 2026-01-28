const url = "https://oducity.github.io/wdd231/chamber/data/members.json";
const awardUrl = "https://oducity.github.io/wdd231/chamber/data/members.json";

//Create required variables for the weather url.
const myKey = "595df96ec4974ae93556a6fd7e848f50";
const fiveDaysAPI = "00d232a82d2403a3cae68481ef9583ac";
const myLat = "6.33";
const myLong = "5.62";


// create the weather url
const weatherUrl = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;
const fiveWeatherUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${fiveDaysAPI}&units=metric`;

/********************** Select all element in the Events box **********************/
const eventcards = document.querySelector("#event-cards");

/********************** Select all elements for current weather display ***********************/
const weatherIcon = document.querySelector("#w-logo");
const temp = document.querySelector("#temp");
const myDescription = document.querySelector("#my-description");
const highTemp = document.querySelector("#temp-high");
const lowTemp = document.querySelector("#temp-low");
const humid = document.querySelector("#humid");
const sunRise = document.querySelector("#sunrise");
const sunSet = document.querySelector("#sunset");
const currentCity = document.querySelector("#city");

/******************* Select all alements for five days forecast ***********************/
const moreForecast = document.querySelector("#more-forecast");

/*********************** Select elements of IDs cards, hero-box and news *************************/
const cards = document.querySelector("#cards");
const heroBox = document.querySelector("#hero-box");
const newsCards = document.querySelector("#news");

/************************Select all of the hamburger and navigation bar **************************/
const hamburgerBtn = document.getElementById("ham-btn");
const navBtn = document.getElementById("nav-bar");

const navList = document.querySelectorAll("nav a");//This target all <a> elements within the <nav> element and store store them in navList variable.
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

getApiData(fiveWeatherUrl);
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
            if (!data.companies && data.name) {
                displayWeatherData(data);
            } else if (data.companies) {
                //displayCompaniesData(data.companies);
                //displayCompaniesData(getRandomCompanies(data.companies.filter(company => company.membership > 1), 3));
                displayCompaniesData(data.companies.filter(company => company.membership > 1));
            } else {
                displayFiveDaysData(data);
            }

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    } 
};

/************ Create seperate async function to display award within the event element ************/
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


/****************** Create displayCompaniesData to compute companies data *******************/

const displayCompaniesData = (companies) => {
    //const randomCompanies = getRandomCompanies(companies, 3);
    console.log("Company API");
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

        if (company.membership === 3) {
            membershipLevel = "Gold";
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


/******************** Created getRandomCompanies() ******************/

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
    let cityName = `${data.name}`;
    currentCity.innerHTML = `<strong>${cityName}</strong>`;
    let iconAddress = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute("SRC", iconAddress);
    weatherIcon.setAttribute("alt", data.weather[0].description);
    temp.innerHTML = `<strong>${data.main.temp}&degC`;
    myDescription.innerText = data.weather[0].description;
    highTemp.innerHTML = `High: ${data.main.temp_max}&degC`;
    lowTemp.innerHTML = `Low: ${data.main.temp_min}&degC`;
    humid.innerHTML = `Humidity: ${data.main.humidity}%`;
    sunRise.innerHTML = `Sunrise: ${data.sys.sunrise}`;
    sunSet.innerHTML = `Sunset: ${data.sys.sunset}`;

};


/******************** Create displayFiveDaysData() to compute five days weather data *************/
function displayFiveDaysData(items) {
    const dateNow = new Date().toISOString().slice(0, 10);
    let currentDate = "";
    console.log(currentDate);
    const city = document.createElement("h3");
    city.innerHTML = `<strong>${items.city.name}</strong>`;
    moreForecast.appendChild(city);
    console.log(city);

    items.list.forEach(item => {
        let dayBox = document.createElement("P");
        dayBox.setAttribute("class", "day-box");
        
        let operatingDate = item.dt_txt.slice(0, 10);
        let operatingTemp = item.main.temp;
        if (dateNow != operatingDate && currentDate != operatingDate) {
            dayBox.innerHTML = `${operatingDate}: <strong>${operatingTemp}&degC</strong>`;
            moreForecast.appendChild(dayBox);
            currentDate = operatingDate;
        }; 
    });
    
};


/************** Events code starts here ***************/

function displayAward(companies) {
    console.log("Award API");
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
