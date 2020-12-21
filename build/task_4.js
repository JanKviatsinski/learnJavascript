
(function (){
const hard = [1, 2, 3, [4, 'str', 6, [7, 'str', 9]]];

function extractArrayFromArray (array){
    for (let nested of array){
        if (Array.isArray(nested)){
            extractArrayFromArray(nested)
        } else if (typeof (nested) === 'number'){
            newArray.push(nested)
        }
    }
}

const newArray = [];

extractArrayFromArray(hard)

console.log(newArray)
}())