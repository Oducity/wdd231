
const cards = document.querySelector("#cards-join");
const time = document.querySelector("#time");
const modalBox = document.querySelector("#modal-box");
const modalDialog = document.querySelector("#dialog-details");
const closeDialog = document.querySelector("#close-dialog");
closeDialog.innerText = `\u274C`;

computeTimeStamp();

function computeTimeStamp () {
    const currentDate = new Date();
    time.setAttribute("datetime", currentDate);
}



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
    nonButton.setAttribute("type", "button");
    nonButton.setAttribute("id", "nonbutton");
    nonButton.setAttribute("class", "nonbutton")    
    nonButton.innerText = "Learn more";
    nonProfitCard.appendChild(nonprofitH2);
    nonProfitCard.appendChild(nonButton);


    const bronzeCard = document.createElement("div");
    bronzeCard.setAttribute("class", "bronze-card");
    const bronzeCardH2 = document.createElement("h3")
    bronzeCardH2.innerText = "Bronze Membership Level";
    const bronzeButton = document.createElement("button");
    bronzeButton.setAttribute("type", "button");
    bronzeButton.setAttribute("id", "bronzebutton");
    bronzeButton.setAttribute("class", "bronzebutton");
    bronzeButton.innerText = "Learn more";
    bronzeCard.appendChild(bronzeCardH2);
    bronzeCard.appendChild(bronzeButton);

    const silverCard = document.createElement("div");
    silverCard.setAttribute("class", "silver-card");
    const silverCardH2 = document.createElement("h3");
    silverCardH2.innerText = "Silver Membership Level";
    const silverButton = document.createElement("button");
    silverButton.setAttribute("type", "button");
    silverButton.setAttribute("id", "silverbutton");
    silverButton.setAttribute("class", "silverbutton");
    silverButton.innerText = "Learn more";
    silverCard.appendChild(silverCardH2);
    silverCard.appendChild(silverButton);

    const goldCard = document.createElement("div");
    goldCard.setAttribute("class", "gold-card");
    const goldCardH2 = document.createElement("h3");
    goldCardH2.innerText = "Gold Membership Level";
    const goldButton = document.createElement("button");
    goldButton.setAttribute("type", "button");
    goldButton.setAttribute("id", "goldbutton");
    goldButton.setAttribute("class", "goldbutton");
    goldButton.innerText = "Learn more";
    goldCard.appendChild(goldCardH2);
    goldCard.appendChild(goldButton);

    cards.appendChild(nonProfitCard);
    cards.appendChild(bronzeCard);
    cards.appendChild(silverCard);
    cards.appendChild(goldCard);
};

const npBtn = document.querySelector("#nonbutton");
const bronzeBtn = document.querySelector("#bronzebutton");
const silverBtn = document.querySelector("#silverbutton");
const goldBtn = document.querySelector("#goldbutton");

const details = {
    np : [
        {detail: "This is a free membership level for non profit organizations", benefits : "Free access to clients, 5gb of cloud space"}
    ],
    bronze : [
        {detail: "Bronze level is a $100 paid annual membership level", benefits: "One dedicated email addresses, access to 30 clients monthly, annual 20gb of cloud storage, five advert placement monthly, access to ten trainning materials"}
    ],
    silver : [
        {detail : "Silver level is a $300 paid annual membership level", benefits : "Three dedicated email addresses, unlimited access to clients, annual 50gb of cloud storage, fifteen advert placement monthly, access to 25 trainning materials annualy"}
    ],
    gold : [
        {detail : "Gold level is a $500 paid annual membership level", benefits : "Seven dedicated email addresses, unlimited access to clients, 150gb of cloud storage, thirty advert placement monthly, unlimited access to over 80 trainning library materials annualy, a dedicated business expert advisor"}
    ]       
};

npBtn.addEventListener("click", () => {
    displayLevelDetails(details.np);
});

bronzeBtn.addEventListener("click", () => {
    displayLevelDetails(details.bronze);
});

silverBtn.addEventListener("click", () => {
    displayLevelDetails(details.silver);
});

goldBtn.addEventListener("click", () => {
    displayLevelDetails(details.gold);
});

function displayLevelDetails (levelData) {
    modalBox.innerHTML = "";
    levelData.forEach (data => {
        let pDetails = document.createElement("p");
        pDetails.setAttribute("class", "details-p");

        let pBenefits = document.createElement("p");
        pBenefits.setAttribute("class", "benefits-p");

        pDetails.innerHTML = `<strong>Details:</strong> ${data.detail}`;
        pBenefits.innerHTML = `<strong>Benefits:</strong> ${data.benefits}`;

        modalBox.appendChild(pDetails);
        modalBox.appendChild(pBenefits);
        modalDialog.showModal();

    });
};


closeDialog.addEventListener ("click", () => {
    modalDialog.close();              
})