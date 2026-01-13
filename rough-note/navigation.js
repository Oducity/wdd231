/************ Toggle to turn ON and OF a class name ***************/
const nameOfId = document.getElementById('id-ame');
/* const nameOFId = document.querrySelector('#id-name'); */
nameOfId.addEventListener('click', () => {
    nameOfId.classList.toggle('show');
});