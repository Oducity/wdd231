 import { heroImages } from "../data/products.mjs";


export function displayHeroImage(images){


        //document.querySelector("#hero-box-inner").innerHTML = "";
        const heroBoxInner = document.querySelector("#hero-box-inner");

        const randomIndex = Math.floor(Math.random() *  images.length);
        console.log(randomIndex);
        const randItem = images[randomIndex];
        console.log(randItem);

        const img = document.createElement("img");
        img.setAttribute("SRC", randItem.imageurl);
        img.setAttribute("class", "hero-photo");
        let alt = `Photo of ${randItem.name}`;
        img.setAttribute("alt", alt);
        img.setAttribute("loading", "lazy");

        heroBoxInner.appendChild(img);

};

displayHeroImage(heroImages);