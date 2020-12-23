(function (){

const numbers = [1, 22, 34, 2, 46, 77, 55, 97];

function searchTwoMaximum (array){
    let newArray = [...array];

     newArray = [newArray[array.length - 2], newArray[array.length - 1]];
    return newArray;
}

console.log(searchTwoMaximum(numbers))

}())
