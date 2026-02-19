import { displayStockDetails } from "./displayStockDetails.mjs";


export async function getStockApiData(arr, nu) {
    try {
        const response = await fetch(arr);
        if (response.ok){
            const data = await response.json();
            if (nu === "lonspan"){
                nu = 0;
            } else if (nu === "steptiles"){
                nu = 1;
            } else if (nu === "metcopo"){
                nu = 2;
            } else if (nu === "metro-shingo"){
                nu = 3;
            } else if (nu === "metro-bond") {
                nu = 4;
            } else {
                nu = 5;
            }
            displayStockDetails(data.stocks, nu);
        
        } else {
            throw Error (await response.text());
        };
    } catch (error){
        console.log(error);
    };
};