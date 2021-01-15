(function (){

    const products ={
        grocery: {
            pasta: {
                amount: 17,
            },
            groats: {
                amount: 22,
                white: 'rice',
            }
        }
    }

    function getProperty (obj, str){
        let newObj = obj;

        const direction = str.split('.');

        for (let i = 0; i < direction.length; i++){
            newObj = (newObj[direction[i]] === undefined) ? undefined : newObj[direction[i]];
        }

        return newObj;
    }

console.log(getProperty(products,'grocery.groats.white'));

let gga = {
    a: 1,
    b: 2,
    c: 3,
}


        const direction = 'grocery.groats.white'.split('.');

    let dda = [].reduce((acc, item) =>{

        if (acc.a === 1){
            acc.a = 99;
        } else {
            acc.a = 100;
        }

        return acc;

    },{i: 0, ...gga})

    console.log(dda);
    console.log('не решено');

       // try {newObj.reduce((acc, item) => {
       //     if (newObj[item] === item){
       //         acc[0] += 1;
       //         acc[2] = newObj[direction[acc[0]]];
       //         newObj = item;
       //     } else acc[2] = newObj[direction[acc[0]]];
       //     return acc;
       //  }, [0,])
       // }
       // catch (e){console.log(e)}


    // console.log(newObj)
    //
    // if (newObj[item] === item){
    //     acc[0] += 1;
    //     acc[2] = newObj[direction[acc[0]]];
    //     newObj = item;
    // } else acc[2] = newObj[direction[acc[0]]];
    // return acc;
}())





