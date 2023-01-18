const openModalButton = document.querySelector("#open-modal")
const closeModalButton = document.querySelector("#close-modal")
const modal = document.querySelector("#modal")
const fade = document.querySelector("#fade"); // para que funcionasse tive qe inserir o ";" nesta linha

const toggleModal = () => { 
    
    [modal, fade].forEach((el) => el.classList.toggle("hide"))
}


[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal())
});