const allUsers = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Igor', age: 25},
    {name: 'Vasia', age: 13},
    {name: 'Roma', age: 65},
    {name: 'Foma', age: 16},
];

const userName = prompt("Имя");

function searchUserData (array, name) {
    let nameFound = false;

    for (let user of array){
        if (user.name.includes(name))
            nameFound = true;
        if (nameFound === true) nameFound = user.name + ' ' +user.age + " years";
        if (nameFound === true) break;
    }

    if (nameFound === false) return 'No results found for your request';
    else return nameFound;
}


    alert(searchUserData(allUsers, userName))