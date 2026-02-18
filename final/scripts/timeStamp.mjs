const modalBox = document.querySelector("#modal-box");
const modalDialog = document.querySelector("#dialog-details");
const closeDialog = document.querySelector("#close-dialog");
closeDialog.innerText = `\u274C`;

const timeStampInput = document.querySelector("#timestamp-input");

function computeTimeStamp () {
    const currentDate = new Date();
    return currentDate;
};
timeStampInput.value = computeTimeStamp();