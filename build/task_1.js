(function (){


const allUsers = [
    {name: 'Ivan', age: 18},
    {name: 'Petr', age: 12},
    {name: 'Igor', age: 25},
    {name: 'Vasia', age: 13},
    {name: 'Roma', age: 65},
    {name: 'Foma', age: 16},
];

const userNameRequest = prompt("Имя");

//--------------------------вариант 1--------------------

function searchUserData (array, request) {
    let userData;

    userData = array.find(user => { return user.name === request; })
    return userData;
}

const user = searchUserData(allUsers, userNameRequest)

    alert((user) ?
        user.name + ' ' +user.age + " years" : 'No results found for your' +
        ' request')

//--------------------------вариант 2--------------------

    function searchUserData_2 (array, request) {
        let userData;

        for (let user of array){
            if (user.name === request) {
                userData = user.name + ' ' +user.age + " years";}
        }

        return (userData) ? userData : 'No results found for your request';
    }

    console.log(searchUserData_2 (allUsers, userNameRequest));

}())