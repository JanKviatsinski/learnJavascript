


(function (){




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

    //--- второй вариант похуже, но зато сам))

    function createNewObject (array){
        const NewObject ={}

        for (let i = 0; i<array.length; i++){
            let length;
            length = array.filter(object => array[i] === object),
                NewObject[arr[i]] = length.length;
        }

        return NewObject
    }

    console.log(createNewObject(arr));





}())