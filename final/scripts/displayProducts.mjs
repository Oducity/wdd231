

export function displayWindows(windows){
    const windowsBox = document.querySelector("#window");
    windowsBox.setAttribute("class", "products-box")
    const h2 = document.createElement("h2");
    h2.innerText = "Windows";
    windowsBox.appendChild(h2);
    windows.forEach((window) => {
        
        const windowCard = document.createElement("div");
        windowCard.setAttribute("class", "card");

        const h3 = document.createElement("h3");
        h3.setAttribute("class", "window-h");
        h3.innerText = window.name;

        const details = document.createElement("p");
        details.setAttribute("class", "details");
        details.innerText = `This window is ${window.size} in dimension for ${window.type}`;
        
        const img = document.createElement("img");
        img.setAttribute("SRC", window.imageurl);
        img.setAttribute("width", "300px");
        img.setAttribute("height", "auto");
        const describe = `Photo of ${window.name} for ${window.type}`;
        img.setAttribute("ALT", describe);

        windowCard.appendChild(h3);
        windowCard.appendChild(details);
        windowCard.appendChild(img);
        windowsBox.appendChild(windowCard);
    });
};



export function displayRoofs(roofs) {
    const roofBox = document.querySelector("#roof");
    roofBox.setAttribute("class", "products-box")
    const h2 = document.createElement("h2");
    h2.innerText = "Roof";
    roofBox.appendChild(h2);

    roofs.forEach((roof) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h3 = document.createElement("h3");
        h3.setAttribute("class", "roof-h");
        h3.innerText = roof.name;

        const details = document.createElement("p");
        details.setAttribute("class", "details");
        details.innerText = `This is a ${roof.name} with guage 0f ${roof.guage} thickness.`;
        
        const img = document.createElement("img");
        img.setAttribute("SRC", roof.imageurl);
        img.setAttribute("width", "300px");
        img.setAttribute("height", "auto");
        const describe = `Photo of ${roof.name}`;
        img.setAttribute("ALT", describe);

        card.appendChild(h3);
        card.appendChild(details);
        card.appendChild(img);
        roofBox.appendChild(card);
    });
};



export function displaySolar(unisols) {
    const solarBox = document.querySelector("#solar");
    solarBox.setAttribute("class", "products-box")
    const h2 = document.createElement("h2");
    h2.innerText = "Solar Products";
    solarBox.appendChild(h2);

    unisols.forEach((solar) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        const h3 = document.createElement("h3");
        h3.setAttribute("class", "roof-h");
        h3.innerText = solar.name;

        const details = document.createElement("p");
        details.setAttribute("class", "details");
        details.innerHTML = `<strong>Model: ${solar.name}</strong> is a ${solar.type} system with capacity 0f <strong>${solar.capacity}</strong>.`;
        
        const img = document.createElement("img");
        img.setAttribute("SRC", solar.imageurl);
        img.setAttribute("width", "300px");
        img.setAttribute("height", "auto");
        const describe = `Photo of ${solar.name} solar electric generator`;
        img.setAttribute("ALT", describe);

        card.appendChild(h3);
        card.appendChild(details);
        card.appendChild(img);
        solarBox.appendChild(card);
    });
};