import { roofs } from "../data/products.mjs";
import { windows } from "../data/products.mjs";
import { solar } from "../data/products.mjs";


export function displayHomeCards(jobs) {
    const cards = document.querySelector("#home-cards");

    const section = document.createElement("section");
    section.setAttribute("class", "job-section");

    const h2 = document.createElement("h2");
    const randomIndex = Math.floor(Math.random() *  images.length);
    console.log(randomIndex);
    const randItem = jobs[randomIndex];
    console.log(randItem);
    h2.innerText = randItem.name;
    section.appendChild(h2);

    const p = document.createElement("p");
    p.innerText = `Photo of ${randItem.name}`;

    const img = document.createElement("img");
    img.setAttribute("SRC", randItem.imageurl);
    img.setAttribute("class", "hero-photo");
    let alt = `Photo of ${randItem.name}`;
    img.setAttribute("alt", alt);
    img.setAttribute("loading", "lazy");
    section.appendChild(img);
    cards.appendChild(section);
}

displayHomeCards(roofs);
displayHomeCards(windows);
displayHomeCards(solar);