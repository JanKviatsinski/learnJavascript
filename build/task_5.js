(function (){

const numbers = [22, 1,  34, 2, 97, 46, 77, 99, 55,];

function searchTwoMaximum (array){
    let newArray = [...array];

    newArray.sort((a, b) => b - a);

    newArray = [newArray[1], newArray[0]];

    return newArray;
}

console.log(searchTwoMaximum(numbers));
console.log(numbers);

let gg = numbers.reduce((acc, next)=>{
    if (!acc[0]){
        acc[0] = 0;
        acc[1] = 0;
    }

    if (acc[0] < next){
        // acc[1] = next;
        acc[0] = next;
    }

    if (acc[1] < next && next !== acc[0]){
        acc[1] = next;
    }

    return acc;
},[])

    console.log(gg)
    console.log('не решено');


}())
