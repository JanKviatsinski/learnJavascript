'use strict'
const divModal = document.createElement('div');
divModal.classList.add('modal');
divModal.hidden = true;

const buttonShowModal = document.createElement('button');
buttonShowModal.textContent = 'Показать модальное окно';
buttonShowModal.addEventListener('click', toggleHidden);
buttonShowModal.addEventListener('click', stopStartClock);

const fragment = document.createDocumentFragment();
fragment.prepend(buttonShowModal);
fragment.append(divModal);
document.body.prepend(fragment);

const buttonHiddenModal = document.createElement('button');
buttonHiddenModal.textContent = 'Срыть модальное окно';
divModal.prepend(buttonHiddenModal);

const clock = document.createElement('div');
divModal.prepend(clock);

const buttonStopStartClock = document.createElement('button');
buttonStopStartClock.textContent = 'stop/start clock';
divModal.append(buttonStopStartClock);

let timerId;
let isClockRunning;

function toggleHidden() {
    divModal.hidden = !divModal.hidden;
}

function updateClock() {
    const date = new Date();

    clock.textContent = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}

function stopStartClock (){
    // три кнопки упраляют одной функцией. в таком кейсе между собой конфликтуют.
    //
    if (!isClockRunning){
        timerId = setInterval(updateClock, 1000);
        updateClock();
    } else {
            clearInterval(timerId);
    }

    isClockRunning = !isClockRunning;
}

divModal.onclick = function (event) {
    switch (event.target) {
        case buttonHiddenModal:
            // последовательно вызывай функции и выходи из switch
            stopStartClock();
            toggleHidden();
            break;
        case buttonStopStartClock:
            stopStartClock();
            break;
    }
}








