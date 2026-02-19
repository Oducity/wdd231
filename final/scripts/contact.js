import { toggleHamBtn } from "./navigation.mjs";
import { createWayFinder } from "./navigation.mjs";

import { lonspan } from "../data/stocks.mjs";
import { steptiles } from "../data/stocks.mjs";
import { metcopo } from "../data/stocks.mjs";
import { metroBond } from "../data/stocks.mjs";
import { metroClassic } from "../data/stocks.mjs";
import { metroShingo } from "../data/stocks.mjs";
import { displayAvailableStocks } from "./displayAvailableStacoks.mjs";
import { computeTimeStamp } from "./timeStamp.mjs";
import { checkPositiveInput } from "./checkPositiveInput.mjs";
import { getStockApiData } from "./getStockApi.mjs";
const stockUrl = `../final/data/stocks.json`;
const lonspanBtn = document.getElementById("lonspan");
const metcopoBtn = document.querySelector("#metcopo");
const metroBondBtn = document.querySelector("#metro-bond");
const metroClassicBtn = document.querySelector("#metro-classic");
const metroShingoBtn = document.querySelector("#metro-shingo");
const closeDialog = document.querySelector("#close-dialog");
const modalDialog = document.querySelector("#dialog-details");
const lonspanBtnid = lonspanBtn.id;

const metcopoId = metcopoBtn.id;



closeDialog.innerText = `\u274C`;

lonspanBtn.addEventListener("click", () => {
    getStockApiData(stockUrl, lonspanBtnid);
});
metcopoBtn.addEventListener("click", () => {
    getStockApiData(stockUrl, metcopoId);
});






const timeStampInput = document.querySelector("#timestamp-input");


toggleHamBtn();
createWayFinder();
displayAvailableStocks(lonspan);
displayAvailableStocks(steptiles);
displayAvailableStocks(metcopo);
displayAvailableStocks(metroBond);
displayAvailableStocks(metroClassic);
displayAvailableStocks(metroShingo);
checkPositiveInput();
closeDialog.addEventListener("click", () => {
    modalDialog.close();
})



timeStampInput.value = computeTimeStamp();





