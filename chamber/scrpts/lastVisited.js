
const visitNum = document.getElementById("visit-times");


let numOfVisit = parseInt(window.localStorage.getItem("visit"), 10) || 0;

if (numOfVisit !== 0) {
    visitNum.textContent = `You have visited ${numOfVisit} times`;
} else {
    visitNum.textContent = "This is your first visit.";
    
}

numOfVisit ++;

localStorage.setItem("visit", numOfVisit);