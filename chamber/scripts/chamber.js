//store the .json file in a variable url.
const url = "https://oducity.github.io/wdd231/chamber/scripts/chamber.json";

//create a cards variable and store element with id="cards" in it.
const cards = document.querySelector("#cards");

// Create async function to fecth from the JSON source url using await fetch() method.

async function getMemebersData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);   //this helpin viewing large amount of data in a table in the console.
    displayMembers(data.members);
};


getMemebersData();


//Create a displayMembers() function to process members data.
const displayMembers = (members) => {
    members.forEach((member) => {
        let star;
        if(member.review === 5){
            star = `\u2605`+`\u2605`+`\u2605`+`\u2605`+`\u2605`;
        } else if (member.review === 4){
            star = `\u2605`+`\u2605`+`\u2605`+`\u2605`+`\u2606`;
        } else if (member.review === 3){
            star = `\u2605`+`\u2605`+`\u2605`+`\u2606`+`\u2606`;
        } else if (member.review === 2) {
            star = `\u2605`+`\u2605`+`\u2606`+`\u2606`+`\u2606`;
        } else if (member.review === 1) {
            star = `\u2605`+`\u2606`+`\u2606`+`\u2606`+`\u2606`;
        } else {
            star = "No review yet";
        }        
        let level;
        if (member.membership === 3) {
            level = "Gold";
        } else if (member.membership === 2) {
            level = "Silver";
        } else {
            level = "Member";
        }

        let card = document.createElement("section");

        let logo = document.createElement("img");
        let companyName = document.createElement("h2");
        let addr = document.createElement("p");
        let phoneNumber = document.createElement("p");
        let message = document.createElement("p");
        let statusBox = document.createElement("p");
        let rated = document.createElement("span");
        let memberLevel = document.createElement("span");
        let url = document.createElement("p");

        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `Logo of ${member.companyname}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "120px");
        logo.setAttribute("heigth", "auto");

        companyName.innerText = member.companyname;
        companyName.setAttribute(".name");

        addr.innerText = member.address;
        addr.setAttribute(".address");

        phoneNumber.innerHTML = `<strong>Phone:</strong> ${member.phone}`;
        phoneNumber.setAttribute(".call-number");

        message.innerText = member.intro;
        message.setAttribute(".message");

        rated.innerHTML = star;
        rated.setAttribute(".rating");

        memberLevel.innerHTML = `<strong>Membership</strong>${level}`;
        memberLevel.setAttribute(".level");
        
        statusBox.appendChild(memberLevel);
        statusBox.appendChild(rated);
        statusBox.setAttribute(".status");

        url.innerHTML = `<strong>Website:</strong> <a>${member.url}`;
        url.setAttribute(".website");

        card.appendChild(logo);
        card.appendChild(companyName);
        card.appendChild(addr);
        card.appendChild(phoneNumber);
        card.appendChild(statusBox);
        card.appendChild(url);

        cards.appendChild(card);

    });
}