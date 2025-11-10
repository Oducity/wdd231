
const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector("#cards");

//Create async defined function called getProphetsData()

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);   //this helpin viewing large amount of data in a table in the console.
    displayProphets(data.prophets);
};

getProphetsData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let birthDatePara = document.createElement("p");
        let placeOfBirthPara = document.createElement("p");

        let portrait = document.createElement("img");
        let name = `${prophet.name} ${prophet.lastname}`;
        let imgAlt = `Photo of ${name}`;
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", imgAlt);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "250px");
        portrait.setAttribute("heigth", "auto");

        fullName.innerText = name;
        card.appendChild(fullName);

        birthDatePara.innerText = `Birth Date: ${prophet.birthdate}`;
        card.appendChild(birthDatePara);

        placeOfBirthPara.innerText = `Place of birth: ${prophet.birthplace}`;
        card.appendChild(placeOfBirthPara);

        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

