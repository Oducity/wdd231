 import { heroImages } from "../data/products.mjs";



 function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function displayHeroImages(images){
    images.forEach(image => {

        document.querySelector("#hero-box-inner").innerHTML = "";
        const heroBoxInner = document.querySelector("#hero-box-inner");
        
        const img = document.createElement("img");
        img.setAttribute("SRC", image.imageurl);
        img.setAttribute("class", "hero-photo");
        let alt = `Photo of ${image.name}`;
        img.setAttribute("alt", alt);
        img.setAttribute("loading", "lazy");

        heroBoxInner.appendChild(img);

    });
};

displayHeroImages(heroImages);