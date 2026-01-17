const date = new Date();
let currentYear = date.getFullYear();
let text = currentYear.toString();
document.getElementById("currentyear").textContent = text;

let lastModify = date.toLocaleDateString("en-US");
let lastModifyString = `Last Updated: ${lastModify}`;
document.querySelector("#lastModify").innerText = lastModifyString;