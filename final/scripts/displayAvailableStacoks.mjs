//This file display available stock to the contact us page.



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
        button.setAttribute("id", stockName);
        button.setAttribute("name", "more-button");
        button.innerText = "Show Details";

        card.appendChild(stockItem);
        card.appendChild(button);

        cards.appendChild(card);

    });
};

