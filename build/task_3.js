
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

        let direction = str.split('.');

        for (let i = 0; i < direction.length; i++){
            if (newObj[direction[i]] === undefined){
                newObj = undefined;
                break;
            }
             else if (newObj[direction[i]]){
                newObj = newObj[direction[i]];
            } else {
                newObj = undefined;
            }
        }

        return newObj
    }


console.log(getProperty(products,'grocery.groats.white'))

}())