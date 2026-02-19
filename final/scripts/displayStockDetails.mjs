
const modalDialog = document.querySelector("#dialog-details");

export function displayStockDetails(items, num) {

    const modalBox = document.querySelector("#modal-box");//continner div
    const productBox = document.createElement("section");//Section element to hold all files
    productBox.setAttribute("class", "product-holder")
    const namehead = document.createElement("h3")
    const productFeatures = document.createElement("p");

    console.log(items[num]);
    const dataName = items[num].name;
    const availableColors = items[num].colors;
    console.log(dataName);

    namehead.innerHTML = dataName;
    productBox.appendChild(namehead);

    items[num].guages.forEach(guage => {
        console.log(`Available color for ${dataName} ${guage}: are: ${availableColors}`);
        productFeatures.innerHTML = `Available color for <strong>${dataName} ${guage}:</srong> are: ${availableColors}`;
        productBox.appendChild(productFeatures);
    });
    modalBox.appendChild(productBox);
    modalDialog.showModal();
    
}
