
export function toggleHamBtn() {
    const hamburgerBtn = document.getElementById("hambtn");
    const navBtn = document.getElementById("hambtn");
    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("show");
        navBtn.classList.toggle("show");
    });
};

//const navList = document.querySelectorAll("nav a");
export function createWayFinder(allClass){
    const h1 = document.querySelector("h1");
    allClass.forEach(navItem => {
        navItem.addEventListener("click", () => {
            h1.innerText = navItem.innerText;
            navItem.classList.toggle("current");

            navList.forEach(navA => {
                navA.classList.remove("way");
            });
            navItem.classList.add("way");
        });
    }) ;
};