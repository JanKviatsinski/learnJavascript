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

    const newObj = data.reduce((previousValue, item) => {
        const [className, day, time] = item;

        if (!previousValue[day]){
            previousValue[day]= {};
            previousValue[day][className] = [time,];

            return previousValue;
        } else if (!previousValue[day][className]){
            previousValue[day][className] = [ time,];
        } else {
            previousValue[day][className].push(time);
        }

        return previousValue
    },{})

    console.log(newObj);

}())