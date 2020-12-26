
let arr = ['a', 'b', 'c', 'a', 'v', 'v', 'v'];

let result2 = arr.reduce((previousValue, item, index ) => {
    if (!previousValue[index]){
        previousValue[item] = 1;
        return previousValue;
    } else {
        previousValue[item] += 1;
        return previousValue;
    }
}, {})

console.log(result2)