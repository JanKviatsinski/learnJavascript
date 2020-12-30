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

function hiddenModal (){
    divModal.hidden = true;
}

const clock= document.createElement('div');

divModal.prepend(clock);

function updateClock (){
    const date = new Date();

    clock.textContent = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

let timerId;

let clockStatus;

function startClock (){
    timerId = setInterval(updateClock, 1000);

    clockStatus = true;

    updateClock ();
}

function stopClock (){
    clearInterval(timerId);

    clockStatus = false;
}

const buttonStopStartClock = document.createElement('button');

divModal.append(buttonStopStartClock);

buttonStopStartClock.textContent = 'stop/start clock';

function stopStartClock (){
    clockStatus ? stopClock() : startClock();
}

const body = document.querySelector('body');

body.onclick = function(event){
    switch (event.target){
        case buttonShowModal:
           return showModal(), startClock();

        case buttonHiddenModal:
            return hiddenModal(), stopClock();

        case buttonStopStartClock:
            return stopStartClock();
    }
}








