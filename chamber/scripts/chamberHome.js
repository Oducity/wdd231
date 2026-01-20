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

/*

function displayHeroImages(heros){
    heros.forEach(hero => {
        let img = document.createElement("img");
        img.setAttribute("src", hero.imageUrl);
        img.setAttribute("alt", "Chamber of commerce image.");
        img.setAttribute("loading", "lazy");
        heroBox.appendChild(img);
    });
};


heros: {
    [
        imageUrl = "https://oducity.github.io/wdd231/chamber/images/hero1.webp",
    ],
    [
        imageUrl = "https://oducity.github.io/wdd231/chamber/images/hero2.webp",
    ],
    [
        imageUrl = "https://oducity.github.io/wdd231/chamber/images/hero3.webp",
    ],
    [
        imageUrl = "https://oducity.github.io/wdd231/chamber/images/hero4.webp",
    ]
};

displayHeroImages(heros);
*/

