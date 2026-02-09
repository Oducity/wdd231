import {places} from '../data/places.mjs';
console.log(places);

const screen = document.querySelector("#main");

const headOne = document.createElement("h1");
screen.appendChild(headOne);

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



function displayPlaces(places) {
    const parentDiv = document.createElement("div");
    parentDiv.setAttribute("class", "parent");
    places.forEach(place => {

        const placeCard = document.createElement("section");
        placeCard.setAttribute("class", "card");

        const headTwo = document.createElement("h2")
        headTwo.setAttribute("class", "head-two");
        headTwo.innerText = place.name;
        placeCard.appendChild(headTwo);

        const addressBox = document.createElement("p");
        addressBox.setAttribute("class", "address");
        addressBox.innerText = place.address;
        placeCard.appendChild(addressBox);


        parentDiv.appendChild(placeCard);
    });

    screen.appendChild(parentDiv);
};

displayPlaces(places);