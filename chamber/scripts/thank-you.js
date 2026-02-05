const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const firstName = urlParams.get(`first-name`);
const lastName = urlParams.get(`last-name`);
const email = urlParams.get(`email`);
const phone = urlParams.get(`phone`);
const businessTitle = urlParams.get(`business-title`);
const businessName = urlParams.get(`business-name`);
const membershipLevel = urlParams.get(`membership-level`);
const description = urlParams.get(`description`);
const dateTime = urlParams.get(`time`);
console.log(urlParams);
console.log(dateTime);
