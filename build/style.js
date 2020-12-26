
'use strict'

const data = [
    ['A', 'mon', '10'],
    ['A', 'mon', '10'],
    ['B', 'wed', '14'],
    ['C', 'mon', '13'],
    ['B', 'sut', '14'],
    ['D', 'mon', '11'],
    ['A', 'twu', '9'],
    ['C', 'mon', '10'],
    ['C', 'fri', '20'],
    ['D', 'mon', '32'],
    ['A', 'wed', '5'],
];

let newArray = data.reduce((previousValue, item) =>{
    if (!previousValue[item[1]]){
        previousValue[item[1]] = item.reduce((previousValue1, item1) =>{
            if (!previousValue1[item1]){
                previousValue1[item1] = [item1];
                return previousValue1;
            } else {
                previousValue1.push(item1[2]);
                return previousValue1;
            }
        },{})
        return previousValue
    } else {
        previousValue[item[1]].push(item.reduce((previousValue1, item1) =>{
            if (!previousValue1[item1]){
                previousValue1[item1] = [item1];
                return previousValue1;
            } else {
                previousValue1.push(item1[2]);
                return previousValue1;
            }
        },{}));
        return previousValue
    }
},{})

console.log(newArray)

// let newArray = data.reduce((previousValue, item) =>{
//         if (!previousValue[item[1]]){
//             previousValue[item[1]] = item.reduce((previousValue1, item1) =>{
//                if (!previousValue1[item1]){
//                    previousValue1[item1] = [item1];
//                    return previousValue1;
//                } else {
//                    previousValue1.push(item1[2]);
//                    return previousValue1;
//                }
//             },{})
//             return previousValue
//         } else {
//             /*previousValue[item[1]].push(item.reduce((previousValue3, item1) =>{
//                 if (!previousValue3[item1[0]]){
//                     previousValue3[item1[0]] = [item1[2]];
//                     return previousValue3[item1[0]];
//                 } else {
//                     previousValue3[item1[0]].push(item1[2]);
//                     return previousValue3[item1[0]];
//                 }
//             },{}))*/;
//             return previousValue
//         }
// },{})
let fcf ={
    mon: {
        A: [ '10', '10' ],
        C: [ '13', '10' ],
        D: [ '11', '32' ]
    },
    wed: {
        B: [ '14' ],
        A: [ '5' ],
    },
    sut: {
        B: [ '14' ]
    },
    twu: {
        A: [ '9' ]
    },
    fri: {
        C: [ '20' ]
    }
}

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));


// console.log(Object.keys(products))
// console.log(getProperty(products, 'grocery','groats', 'white'))



// / 1 - нужно реализовать функции получения значения из объекта. Входные параметры функции ( объект, строка пути )
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