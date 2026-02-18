// This script check if the total meter input value is lower than 10 meters.
//if it is lower than 0 meters, it automatically reset the value 
//preventing the user from submitting negative or lower number than allowed

export function checkPositiveInput() {
    const inputNumber = document.getElementById("total-meter");
    inputNumber.addEventListener("input", () => {
        if (Number(inputNumber.value) < 1) {
            inputNumber.value = ""  ;
        };
            
    });
};