

// это решение из гугла, попробую еще по своему сделать

let arr = ['a', 'b', 'c', 'a', 'v', 'v', 'v'];

let result = {};

for (let i = 0; i < arr.length; ++i) {
    let a = arr[i];
    if (result[a] === undefined)
        result[a] = 1;

    else
        result[a] += 1;
}

console.log(result);
