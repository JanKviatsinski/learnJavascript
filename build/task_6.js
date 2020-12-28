(function (){

    const data = [
        ['A', 'mon', '10'],
        ['A', 'mon', '10'],
        ['B', 'wed', '14'],
        ['C', 'mon', '13'],
        ['B', 'sut', '14'],
        ['D', 'mon', '11'],
        ['A', 'twu', '9'],
        ['C', 'mon', '10'],
        ['C', 'fri', '20'],
        ['D', 'mon', '32'],
        ['A', 'wed', '5'],
    ];

    let newObj = data.reduce((previousValue, item) =>{
        if (!previousValue[item[1]]){
            previousValue[item[1]]= {};
            if(!previousValue[item[1]][item[0]]){
                previousValue[item[1]][item[0]] = [ item[2],];
            } else { previousValue[item[1]][item[0]].push(item[2]);}
            return previousValue
        } else if (!previousValue[item[1]][item[0]]){
            previousValue[item[1]][item[0]] = [ item[2],];
        } else { previousValue[item[1]][item[0]].push(item[2]);}
        return previousValue

    },{})

    console.log(newObj);
}())