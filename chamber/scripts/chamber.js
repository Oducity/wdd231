//store the .json file in a variable url.
const url = "https://oducity.github.io/wdd231/chamber/scripts/chamber.json";

//create a cards variable and store element with id="cards" in it.
const cards = document.querySelector("#cards")

// Create async function to fecth from the JSON source url using await fetch() method.

async function getMemebersData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);   //this helpin viewing large amount of data in a table in the console.
    displayMembers(data.members);
};



//Create a displayMembers() function to process members data.
const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
    });
}