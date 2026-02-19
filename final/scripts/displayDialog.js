
function displayProductDetails(products) {
    const modalBox = document.querySelector("#modal-box");
    products.forEach((product) => {
        const productBox = document.createElement("section");
        productBox.setAttribute("class", "product-modal")
        const namehead = document.createElement("h3")

        const objectName = product.name;
        namehead.innerText = objectName;
        productBox.appendChild(namehead);
        product.guages.forEach((guage) => {
            const productFeatures = document.createElement("p");
            productFeatures.innerHTML = `For <strong>${objectName} ${guage}</strong>; Available colors: ${product.colors}`;
            productBox.appendChild(productFeatures);
            console.log(`For ${objectName} ${guage}: Available colors are: ${product.colors}`);
        })
        modalBox.appendChild(productBox);
        modalDialog.showModal();
    })
};


lonspanBtn.addEventListener("click", (lonspan) => {
    displayProductDetails(lonspan);    
});

closeDialog.addEventListener("click", () => {
    
});
