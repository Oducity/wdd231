
const cards = document.querySelector("#cards-join");


createMembershipCard();


function createMembershipCard () {
    const cardsH2= document.createElement("h2");
    cardsH2.innerText = "Membership Level";
    cards.appendChild(cardsH2);
    const nonProfitCard = document.createElement("div");
    nonProfitCard.setAttribute("class", "nonprofit-card");
    const nonprofitH2 = document.createElement("h3");
    nonprofitH2.innerText = "Non Profit Membership Level";
    const nonButton = document.createElement("button");
    nonButton.innerText = "Learn more";
    nonProfitCard.appendChild(nonprofitH2);
    nonProfitCard.appendChild(nonButton);


    const bronzeCard = document.createElement("div");
    bronzeCard.setAttribute("class", "bronze-card");
    const bronzeCardH2 = document.createElement("h3")
    bronzeCardH2.innerText = "Bronze Membership Level";
    const bronzeButton = document.createElement("button");
    bronzeButton.innerText = "Learn more";
    bronzeCard.appendChild(bronzeCardH2);
    bronzeCard.appendChild(bronzeButton);

    const silverCard = document.createElement("div");
    silverCard.setAttribute("class", "silver-card");
    const silverCardH2 = document.createElement("h3");
    silverCardH2.innerText = "Silver Membership Level";
    const silverButton = document.createElement("button");
    silverButton.innerText = "Learn more";
    silverCard.appendChild(silverCardH2);
    silverCard.appendChild(silverButton);

    const goldCard = document.createElement("div");
    goldCard.setAttribute("class", "gold-card");
    const goldCardH2 = document.createElement("h3");
    goldCardH2.innerText = "Gold Membership Level";
    const goldButton = document.createElement("button");
    goldButton.innerText = "Learn more";
    goldCard.appendChild(goldCardH2);
    goldCard.appendChild(goldButton);

    cards.appendChild(nonProfitCard);
    cards.appendChild(bronzeCard);
    cards.appendChild(silverCard);
    cards.appendChild(goldCard);
};

