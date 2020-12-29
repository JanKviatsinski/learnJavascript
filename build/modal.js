'use strict'

const divModal = document.createElement('div');

document.body.prepend(divModal);

const buttonShowModal = document.createElement('button');

document.body.prepend(buttonShowModal);

divModal.classList.add('modal');

buttonShowModal.textContent = 'Показать модальное окно';

const buttonHiddenModal = document.createElement('button');

divModal.prepend(buttonHiddenModal);

buttonHiddenModal.textContent = 'Срыть модальное окно';

divModal.hidden = true;

function showModal (){
    divModal.hidden = false;
}

buttonShowModal.addEventListener("click", showModal);

buttonShowModal.addEventListener("click", startClock);

function hiddenModal (){
    divModal.hidden = true;
}

buttonHiddenModal.addEventListener("click", hiddenModal);

buttonHiddenModal.addEventListener("click", stopClock);

const clock= document.createElement('div');

divModal.prepend(clock);

function updateClock (){
    const date = new Date();

    clock.textContent = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

let timerId;

function startClock (){
    timerId = setInterval(updateClock, 1000);

    updateClock ();
}

function stopClock (){
    clearInterval(timerId)
}







