
(function (){
    let arr = ['a', 'b', 'c', 'a', 'v', 'v', 'v'];

    let result = {};

    for (let i = 0; i < arr.length; ++i) {
        let a = arr[i];

        if (!result[a])
        {result[a] = 1;}
        else {result[a] += 1;}
    }

    console.log(result);

    //--- второй вариант похуже, но зато сам:)

    function createNewObject (array){
        const newObject ={}

        for (let i = 0; i<array.length; i++){
            let forLength;

            forLength = array.filter(object => array[i] === object),
                newObject[arr[i]] = forLength.length;
        }
        return newObject
    }

    console.log(createNewObject(arr));

}())