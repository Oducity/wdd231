// Declare a variable to store the url string
const url = "https://oducity.github.io/wdd231/chamber/data/companies.json";
//const url = "https://oducity.github.io/wdd231/data/prophets.json";
// Declare a variable to store the target html element
const cards = document.querySelector("#cards");

// Create async function to fecth from the JSON source url using await fetch() method.

async function getAllFirmsData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);   //this helpin viewing large amount of data in a table in the console.
    displayFirmsData(data.allFirms);
};

getAllFirmsData();

const displayFirmsData = (allFirms) => {
    allFirms.forEach((company) => {
        let memberStar = `\u2605`;
        let membershipLevel = "member";
        if (company.membership === 1) {
            membershipLevel = "Member";
        } else if (company.membership === 2) {
            membershipLevel = "Silver";
        } else {
            membershipLevel = "Gold"
        }

        let companySlot = document.createElement("section");
        companySlot.setAttribute(".slot");

        let companyName = document.createElement("h2"); // formerly fullname
        companyName.setAttribute(".company-name")

        let addressP = document.createElement("p"); // formerly birthDatePara
        addressP.setAttribute(".address");

        let phoneP = document.createElement("p"); // formerly placeOfBirthPara
        phoneP.setAttribute(".phone");

        let statusP = document.createElement("p"); //Creted <p> element for company status.
        statusP.setAttribute(".status-p");

        let companyUrl = document.createElement("p");
        companyUrl.setAttribute(".url");

        //store object's company in a variable "name"
        let name = company.name;
        companyName.innerText = name;//Paces name in the element variable "companyName"
        // Creates Image and its attributes
        let portrait = document.createElement("img");
        let imgAlt = `Photo of ${name}`;
        portrait.setAttribute("src", company.imageurl);
        portrait.setAttribute("alt", imgAlt);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "250px");
        portrait.setAttribute("heigth", "auto");

        //companySlot.appendChild(portrait);

        
        companySlot.appendChild(companyName);

        addressP.innerText = `Address: ${company.address}`;
        companySlot.appendChild(addressP);

        phoneP.innerText = `Phone: ${company.phone}`;
        companySlot.appendChild(phoneP);

        statusP.innerText = `Membership: ${membershipLevel} || Rating: ${memberStar * company.rating}`;
        companySlot.appendChild(statusP);

        companyUrl.innerText = `Website Address: ${company.url}`;
        companySlot.appendChild(companyUrl);
        companySlot.appendChild(portrait);

        cards.appendChild(companySlot);
    });
};

