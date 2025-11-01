const hamburgerBtn = document.getElementById("ham-btn");
const navBar = document.querySelector("#nav-bar");
const navList = document.querySelectorAll("a");
const h1 = document.querySelector("h1");

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("show");
    navBar.classList.toggle("show");
});

addClassName(navList);

function addClassName(allClass) {
    
    allClass.forEach(navItem => {
        
        navItem.addEventListener("click", () => {
            
            h1.innerText = navItem.innerText;
            navItem.classList.toggle("current");
        })
    });
}