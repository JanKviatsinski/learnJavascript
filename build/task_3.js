

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


    function getProperty (obj, ...restArg){

        function searchData (){

            for (let i = 0; i<=restArg.length;){
                let newObj = {...obj};

                if (newObj[restArg[i]]){
                    console.log(newObj[restArg[i]])
                    newObj = {...newObj[restArg[i]]}
                    i++
                } else {
                    console.log(newObj[restArg[i]])}
                i++
            }
        }

        searchData();

    }

    getProperty(products, 'grocery','groats', 'white')







}())