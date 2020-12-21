
(function (){

    let products ={
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


    function getProperty (obj, i, ...restArg){
        for ( let index in obj){
            if (i === 0){
                console.log(obj[index])
                console.log((restArg.length++))
            }
            if (obj[index] === obj[restArg[i]]){
                getProperty(obj[index], i++)
            }
        }
    }

    console.log(getProperty(products,0,'grocery','groats', 'white'))



    // function getProperty (obj, i, ...restArg){
    //     for ( let index1 in obj){
    //         if (obj[index1] === obj[restArg[i]])
    //             for (let index2 in obj[index1]){
    //                 if (obj[index1][index2] === obj[index1][restArg[1]]){
    //                     for ( let index in obj[index1][index2])
    //                         if (obj[index1][index2][index]===obj[index1][index2][restArg[2]]){
    //                             console.log(obj[index1][index2][index])
    //                         }
    //                 }
    //             }
    //     }
    // }
    // for (let i = 0; i<=restArg.length; i++){
    //     let newObj = {};
    //console.log(obj[restArg[i]][restArg[1]][restArg[2]])
    //     if (obj[restArg[i]]){
    //         console.log(newObj[restArg[i]])
    //         newObj.push(...obj[restArg[i]])
    //         console.log(newObj)
    //     } else {
    //         console.log(newObj[restArg[i]])}
    // }

}())