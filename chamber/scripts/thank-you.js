const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const thanksBox = document.querySelector("#thanks-box");

desplayFormData(urlParams);

function desplayFormData (data) {
    const appreciation = document.createElement("p");
    const dataBox = document.createElement("div");

    const instruction = document.createElement("p");
    instruction.innerText = `Your registration information is as follows:`;
    const firstName = data.get(`first-name`);
    const lastName = data.get(`last-name`);
    const email = data.get(`email`);
    const phone = data.get(`phone`);
    const businessTitle = data.get(`business-title`);
    const businessName = data.get(`business-name`);
    const membershipLevel = data.get(`membership-level`);
    const description = data.get(`description`);

    appreciation.innerText = `Thank you ${firstName} ${lastName} for registring your company "${businessName}" with us.`;
    thanksBox.appendChild(appreciation);

    dataBox.appendChild(instruction);
    dataBox.appendChild(`span>First Name</strong>: <span>${firstName}</span>`);
    dataBox.appendChild(`span>Last Name</strong>: <span>${lastName}</span>`);
    dataBox.appendChild(`span>Email</strong>: <span>${email}</span>`);
    dataBox.appendChild(`span>Phone</strong>: <span>${phone}</span>`);
    dataBox.appendChild(`span>Business Title</strong>: <span>${businessTitle}</span>`);
    dataBox.appendChild(`span>Business Name</strong>: <span>${businessName}</span>`);
    dataBox.appendChild(`span>Membership</strong>: <span>${membershipLevel}</span>`);
    dataBox.appendChild(`span>Description</strong>: <span>${description}</span>`);

    thanksBox.appendChild(thanksBox);

}

