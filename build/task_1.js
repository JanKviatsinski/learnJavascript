(function (){


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
    let UserData;

    for (let user of array){
        if (user.name.includes(name)) {
            UserData = user.name + ' ' +user.age + " years";}
    }

    return (UserData === undefined) ? 'No results found for your request' : UserData;
}

    alert(searchUserData(allUsers, userName))


}())