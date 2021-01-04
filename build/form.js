'use strict'

const form = document.forms.form;
const name = form.name;
const age = form.age;

function formValidation(){

    const result = validateAge () && validateName ();

    if (result){
        createTable ()
    }

    function validateName (){
        let userNameLength = name.value.length;

        if (userNameLength >= 3 && userNameLength <= 30) {
            return true;
        } else {
            createMessage(name);
            return false;
        }
    }

    function validateAge (){
        let userAge = age.value;

        if(userAge >= 18 && userAge <= 99){
            return true;
        } else {
            createMessage(age);
            return false;
        }
    }

    function createTable ()  {
        // как динамически создать создать таблику чтоб она не пропадала?

        // const table = document.createElement('table');
        // document.body.append(table);

        const table = document.querySelector('table')
        const tr = table.insertRow();
        const tdName = tr.insertCell();
        tdName.textContent = 'cccc';

        const tdAde = tr.insertCell();
        tdAde.textContent = 'gggg';

        const tdButton = tr.insertCell();
        tdButton.innerHTML = '<button>Удалить</button>';
        tdButton.addEventListener('click', () => {
            tr.remove();
        })

    }

    return result;
}

age.addEventListener('keypress', function (event){
    let age = Number.isNaN(Number(event.target.value));
    if (age){
        event.preventDefault()
    }
})

function createMessage (input){
    const parent = input.parentNode;
    const label = parent.querySelector('label');
    const left = label.offsetWidth;
    const message = document.createElement('p');
    message.textContent = `поле ${input.id} неверно`;
    message.style.position = 'absolute';
    message.style.left= left + 'px';
    message.style.backgroundColor = '#529b23';
    message.style.margin = '0';

    const messageWrap = document.createElement('div');
    messageWrap.style.position = 'relative';
    parent.prepend(messageWrap);
    messageWrap.append(label);
    messageWrap.append(message);
    messageWrap.append(input);
    messageWrap.append(input);

    input.onfocus = () => message.hidden = true;
}