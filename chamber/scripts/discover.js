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
        addressBox.innerHTML = `<strong>Address:</strong> ${place.address}`;
        placeCard.appendChild(addressBox);

        const descriptionBox = document.createElement("p");
        descriptionBox.setAttribute("class", "description");
        descriptionBox.innerHTML = `<strong>Description:</strong> ${place.description}`;
        placeCard.appendChild(descriptionBox);

        const typeBox = document.createElement("p");
        typeBox.setAttribute("class", "type");
        typeBox.innerHTML = `<strong>Type:</strong> ${place.type}`;
        placeCard.appendChild(typeBox);

        const img = document.createElement("img");
        img.setAttribute("SRC", place.imgurl);
        img.setAttribute("loading", "lazy");
        img.setAttribute("ALT", `Image of ${place.name}`);
        placeCard.appendChild(img);

        const labelBox = document.createElement("p")
        labelBox.setAttribute("class", "label-box");

        const label = document.createElement("label");
        label.setAttribute("for", "button");

        const button = document.createElement("button");
        button.setAttribute("type", "button");
        button.innerText = "Learn More";
        label.appendChild(button);

        labelBox.appendChild(label)

        placeCard.appendChild(labelBox);


        parentDiv.appendChild(placeCard);
    });

    screen.appendChild(parentDiv);
};

displayPlaces(places);


