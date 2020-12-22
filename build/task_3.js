
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
        console.log(restArg.length)
        for ( let index in obj){
            if (i === restArg.length){
                console.log(obj[index])
            }
            if (obj[index] === obj[restArg[i]]){
                getProperty(obj[index], i++,'grocery','pasta', 'white')
            }
        }
    }

getProperty(products,0,'grocery','pasta', 'white')




}())