const hamburgerBtn = document.getElementById("ham-btn");
const navBtn = document.getElementById("nav-bar");

const navList = document.querySelectorAll("a");
const h1 = document.querySelector("h1");

const homePage = document.getElementById("home-pg");
const discoveryPage = document.getElementById("discovery-pg");
const directoryPage = document.getElementById("directory-pg");
const joinUsPage = document.getElementById("join-pg");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("show");
    navBtn.classList.toggle("show");
});





homePage.addEventListener("click", () => {
    h1.innerText = `${homePage.innerText} Page`;
    homePage.classList.toggle("current");
});

discoveryPage.addEventListener("click", () => {
    h1.innerText = `${discoveryPage.innerText} Page`;
    discoveryPage.classList.toggle("current");
});

directoryPage.addEventListener("click", () => {
    h1.innerText = `${directoryPage.innerText} Page`;
    directoryPage.classList.toggle("current");
});

joinUsPage.addEventListener("click", () => {
    h1.innerText = `${joinUsPage.innerText} Page`;
    joinUsPage.classList.toggle("current");
});