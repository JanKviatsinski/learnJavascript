'use strict'

let divModal = document.createElement('div');

document.body.prepend(divModal);

let buttonShowModal = document.createElement('button');

document.body.prepend(buttonShowModal);

divModal.classList.add('yes')

buttonShowModal.textContent = 'Показать модальное окно';

let buttonHiddenModal = document.createElement('button');

divModal.prepend(buttonHiddenModal);

buttonHiddenModal.textContent = 'Срыть модальное окно';

// divModal.hidden = true;

function showModal (){
    divModal.hidden = false;
}

buttonShowModal.addEventListener("click", showModal)

function hiddenModal (){
    divModal.hidden = true;
}

buttonHiddenModal.addEventListener("click", hiddenModal)

let date = new Date();
let hours = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds()

console.log(`${hours} : ${minute} : ${seconds}`)





