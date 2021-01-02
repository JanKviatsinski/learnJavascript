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
}())





