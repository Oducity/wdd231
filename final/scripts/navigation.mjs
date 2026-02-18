
export function toggleHamBtn() {
    const hamburgerBtn = document.getElementById("hambtn");
    const navBtn = document.getElementById("navbar");
    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("show");
        navBtn.classList.toggle("navshow");
    });
};



export function createWayFinder() {
    const navList = document.querySelectorAll("nav a");
    const h1 = document.querySelector("h1");
    if (document.querySelector(".homeh1")) {
        h1.innerText = document.querySelector("#home-btn").innerText;
    } else if (document.querySelector(".abouth1")) {
        h1.innerText = document.querySelector("#about-btn").innerText;
    } else if (document.querySelector(".contact-btn")) {
        h1.innerText = document.querySelector("#contact-btn").innerText;
    } else {
        h1.innerText = "Congratulations! Request Sent";
    }
    navList.forEach(navItem => {
        navItem.addEventListener("click", () => {
            h1.innerText = navItem.innerText;
            navList.forEach(navA => {
                navA.classList.remove("way");
            });

            navItem.classList.add("way");
        });
    });
};