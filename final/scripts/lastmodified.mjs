const date = new Date();
export function getYear(){
    
    let currentYear = date.getFullYear();
    let text = currentYear.toString();
    document.getElementById("currentyear").textContent = text;
}

export function lastModify(){
    let lastModified = date.toLocaleDateString("en-US");
    let lastModifyString = `Last Updated: ${lastModified}`;
    document.querySelector("#lastModify").innerText = lastModifyString;
}