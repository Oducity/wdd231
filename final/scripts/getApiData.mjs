import { displayRoofs } from "./displayProducts.mjs";
import { displayWindows } from "./displayProducts.mjs";
import { displaySolar } from "./displayProducts.mjs";

export async function getApiData(arr) {
    try {
        const response = await fetch(arr);
        if (response.ok){
            const data = await response.json();
            displayRoofs(data.roofs);
            displayWindows(data.windows);
            displaySolar(data.unisols);
        } else {
            throw Error(await response.text());
        }
    } catch (error){
        console.log(error);
    }
}