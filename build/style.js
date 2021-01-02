
'use strict'
const form = document.forms.form;
const name = form.name;
const age = form.age;

function formValidation(){

    return validateAge () && validateName ();

    function validateName (){
        let userNameLength = name.value.length;

    if (userNameLength >= 3 && userNameLength <= 30) {
        return alert(555)
    } else {
        createMessage(name, false);
        return false;
    }
    }

function validateAge (){
    let userAge= age.value;

    if(userAge >= 18 && userAge <= 99){
        return true;
    } else {
        createMessage(age, false);
        return false;
    }
}
}


function createTable ()  {
    let table = document.createElement('table');
    let tr = table.insertRow();
    let td = tr.insertCell();
    td.textContent = 'cccc';
    tr.textContent = 'gggg';

    // let td = document.createElement('td');
    // let tr = document.createElement('tr');
    // tr.appendChild(td);

    // table.appendChild(td);
    // table.appendChild(tr);
    // document.body.appendChild(table);
    table.style.backgroundColor = '#60a75b';
    td.style.borderColor = '#060706'
    tr.style.borderColor = '#060706'
    td.style.border = 2 + 'px';
    tr.style.border = 2 + 'px';
    tr.style.width = 50 + 'px';
    td.style.width = 50 + 'px';
    tr.style.height = 50 + 'px';
    td.style.height = 50 + 'px';
    table.style.height = 100 + 'px';
    table.style.width = 100 + 'px';
    // td.textContent = 'cccc';
    // tr.textContent = 'gggg';
    document.body.append(table);
}

createTable ()

age.addEventListener('keypress', function (event){
    let age = Number.isNaN(Number(event.target.value));
    if (age){
        event.preventDefault()
    }
})

function createMessage (input){
    let parent = input.parentNode;
    let messageWrap = document.createElement('div');
    let message = document.createElement('p');
    let label = parent.querySelector('label');
    parent.prepend(messageWrap);
    messageWrap.append(label);
    messageWrap.append(message);
    messageWrap.append(input);
    messageWrap.append(input);
    message.textContent = `поле ${input.id} неверно`;
    messageWrap.style.position = 'relative';
    message.style.position = 'absolute';
    let left = label.offsetWidth;
    message.style.left= left + 'px';
    message.style.backgroundColor = '#60a75b';
    message.style.margin = '0';
    input.onfocus = () => message.hidden = true;
}

    // (messageWrap.offsetWidth / 2) - (message.offsetWidth/2) - label.offsetWidth
// let ages = Number("s");
//
// alert(  ages);







//
// console.log(name)
// console.log(age)



// let ff = document.forms.form.name;
// select.options[0].selected = true;
//
// let option = new Option("Текст", "value", false, true );
// select.prepend(option)
// console.log(select.textContent)
//--------------------------------------------------------
//третья задача первое решение
// function getProperty (obj, str){
//     let newObj = obj;
//
//     const direction = str.split('.');
//
//     for (let i = 0; i < direction.length; i++){
//         if (newObj[direction[i]] === undefined){
//             newObj = undefined;
//             break;
//         }
//          else if (newObj[direction[i]]){
//             newObj = newObj[direction[i]];
//         } else {
//             newObj = undefined;
//         }
//     }
//
//     return newObj
// }
//-------------------------------------------------------------

// const originalArray = [10, 2, 33, 1, 33, 4, 9, 22, 10];
//
// function arrayTransformation (originalData) {
//
//     function findUnique(data) {
//         const result = [];
//
//         for (let str of data) {
//             if (!result.includes(str))
//         result.push(str);
//       }
//
//         return result;
//     }
//
//     const uniqueArray = findUnique(originalData)
//         .sort( (a, b) => a - b)
// return uniqueArray;
// }
//
// const aaa = arrayTransformation(originalArray)
// console.log(aaa);
// console.log(originalArray);

//---------------------------------------------------------------

//
// const originalArray = [10, 2, 33, 1, 33, 4, 9, 22, 10];
//
// function arrayTransformation (originalData) {
//
//     const sortArray = [...originalData.sort( (a, b) => a - b)];
//
//  sortArray.reduce((previous, next) => {
//      if ( previous === next ) sortArray.splice(sortArray.indexOf(next,0),1);
//   else return next;
//  },0);
//
//     return sortArray;
// }
//
// const sss = arrayTransformation(originalArray);
//
// console.log(originalArray);
// console.log(sss);

//----------------------------------------------------------------------

// const allUsers = [
//     {name: 'Ivan', age: 18},
//     {name: 'Petr', age: 12},
//     {name: 'Igor', age: 25},
//     {name: 'Vasia', age: 13},
//     {name: 'Roma', age: 65},
// ];

// const adultAge = 18;
//
// function sortUsers (array, adultAge){
//
//     const adultUsers = [];
//     const notAdultUsers = [];
//
//     for (let user of array) {user.age >= adultAge ?
//         adultUsers.push(user) : notAdultUsers.push(user);}
//
//     console.log(adultUsers, notAdultUsers);
// }
//
// sortUsers(allUsers, adultAge);

//------------------------------------------------------




// 1 - Написать функцию, которая получает на вход параметром массив чисел
// пример: [10, 2, 33, 1, 33, 4, 9, 22, 10] -> [1, 2, 4, 9, 10, 22, 33]
// 2 - Функция которая определяет, является ли слово "полиндромом"


//     1 - Написать скрипт для суммирования чисел в массиве
// Прим. есть массив чисел
// const numbers = [10, 25, 100];
// На выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135), скрипт должен игнорировал другие типы данных.
//
// 2 - Создать массив объектов для юзеров.
//     Прим. [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// На выходе отдавать два массива. Первый с совершеннолетними пользователями, второй с несовершеннолетними.
//
// 3 - Создать массив объектов, data = [{ firstName: 'Ashton', lastName: 'Kutcher', age: 40}, ... ]; ( от 5 и более значений ).
// Выведем окно prompt, в которое необходимо будет ввести фамилию пользователя; Написать инструкцию поиска по массиву data, с введенными в prompt данными;
// Если есть совпадение - вывести все данные этого пользователя в altert, если совпадения не произошло вывести alert с ошибкой:  “No results found for your request”
// Поиск производится без учета регистра.
//
// 4 - Есть исходный массив строк ['a', 'b', 'c'], данные могут повторятся, нужно собрать объект, у которого свойства будут состоять из строк, а значения этих свойств будет количество повторений в массиве.
//     Пример: ['a', 'b', 'c', 'a', 'v', 'v', 'v'] => { a: 2, b: 1, c: 1, v: 3}


// 1 - нужно реализовать функции получения значения из объекта. Входные параметры функции ( объект, строка пути )
// const obj = {
//     a: {
//         b: {
//             c: 'd'
//         },
//         e: 'f'
//     }
// };
// примеры:
//     getProperty( obj, 'a.b.c' ) -> 'd'
// getProperty( obj, 'a.b' ) -> { c : 'd' }
// getProperty( obj, 'a.x.e' ) -> undefined



//
// SpiritMoon, [17.12.20 15:15]
// 2 - есть массив чисел, нужно реализовать функцию, которая в этом массиве находит 2 максимальных числа ( за один проход по массиву )
//
// SpiritMoon, [17.12.20 15:17]
// 3 - есть массив чисел, нужно реализовать функцию которая вернет промежутки между числами
// пример:
//     const arr = [1, 3, 5, 2, 8, 9, 10, 12];
// getRange( arr ) -> '1-3, 5, 8-10, 12'
//
// SpiritMoon, [17.12.20 15:22]
// 4 - у нас есть рассписание
// const data = [
//     ['A', 'mon', '10'],
//     ['A', 'mon', '10'],
//     ['B', 'wed', '14'],
//     ['C', 'mon', '13'],
//     ['B', 'sut', '14'],
//     ['D', 'mon', '11'],
//     ['A', 'twu', '9'],
//     ['C', 'mon', '10'],
//     ['C', 'fri', '20'],
//     ['D', 'mon', '32'],
//     ['A', 'wed', '5']
// ];
// Первый элемент в массиве - название класса, второй - это день недели и третий время дня
// Нужно реализовать функцию, которая возвращает объект, в котором сгруппированы дни недели, по дням недели сгрупированы классы и время в них
// let ff ={
//     mon: {
//         A: [ '10', '10' ],
//         C: [ '13', '10' ],
//         D: [ '11', '32' ]
//     },
//     wed: {
//         B: [ '14' ],
//         A: [ '5' ],
//     },
//     sut: {
//             B: [ '14' ]
//         },
//     twu: {
//         A: [ '9' ]
//     },
//     fri: {
//         C: [ '20' ]
//     }
// }


// SpiritMoon, [17.12.20 21:08]
// const simple = [1, 2, 3, [4, 5, 6], [7, 8, 9]];
// const medium = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// const hard = [1, 2, 3, [4, 'str', 6, [7, 'str', 9]]];
// // arr -> [1, 2, 3, 4, 5, 6, 7, 8, 9]; использовать рест спред и рукурсию урок 18