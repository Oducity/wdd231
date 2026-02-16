import { displayWindows } from "./displayProducts.mjs";

export async function getApiData(arr) {
    try {
        const response = await fetch(arr)
        if (response.ok){
            const data = response.json();
            console.log(data);
            displayWindows(data);

        } else {
            throw Error(await response.text());
        };
    } catch (error){
        console.log(error);
    };
};
