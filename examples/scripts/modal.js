const modal = document.querySelector("#myModal");
const closeModal = document.querySelector("#closeModal");

modal.show();

closeModal.addEventListener("click", () => {
    modal.close();
})