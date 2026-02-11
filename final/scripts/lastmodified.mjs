
export function getYear(){
    const date = new Date();
    let currentYear = date.getFullYear();
    let text = currentYear.toString();
    document.getElementById("currentyear").textContent = text;
}

export function lastModify(){
    const date1 = new Date();
    let lastModified = date1.toLocaleDateString("en-US");
    let lastModifyString = `Last Updated: ${lastModified}`;
    document.querySelector("#lastModify").innerText = lastModifyString;
}