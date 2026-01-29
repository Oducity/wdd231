const modal = document.querySelector("#myModal");
const closeModal = document.querySelector("#closeModal");
const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
    modal.show();
});



closeModal.addEventListener("click", () => {
    modal.close();
});