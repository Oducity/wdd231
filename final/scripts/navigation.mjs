
export function toggleHamBtn() {1
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