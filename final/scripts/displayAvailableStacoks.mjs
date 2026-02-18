import { lonspan } from "../data/stocks.mjs";
import { steptiles } from "../data/stocks.mjs";
import { metcopo } from "../data/stocks.mjs";
import { metroShingo } from "../data/stocks.mjs";
import { metroBond } from "../data/stocks.mjs";
import { metroClassic } from "../data/stocks.mjs";



//const modalBox = document.querySelector("#modal-box");
//const modalDialog = document.querySelector("#dialog-details");
//const closeDialog = document.querySelector("#close-dialog");
//closeDialog.innerText = `\u274C`;
//
//const timeStampInput = document.querySelector("#timestamp-input");
//
//function computeTimeStamp () {
//    const currentDate = new Date();
//    return currentDate;
//};
//timeStampInput.value = computeTimeStamp();




export function displayAvailableStocks(stocks) {
    const cards = document.querySelector("#detail-cards");

    stocks.forEach((stock) => {

        const card = document.createElement("div");

        const stockItem = document.createElement("p");
        stockItem.setAttribute("class", "stock-item");

        const stockName = stock.name;
        stockItem.innerHTML = `<strong> ${stockName}`

        const button = document.createElement("button");
        button.setAttribute("class", "actionBtn");
        button.setAttribute("type", "button");
        button.setAttribute("id", "more-button");
        button.setAttribute("name", "more-button");
        button.innerText = "Show Details";

        card.appendChild(stockItem);
        card.appendChild(button);

        cards.appendChild(card);

    });
}