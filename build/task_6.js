
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

let newArray = data.reduce((previousValue, item) =>{
    if (!previousValue[item[1]]){
        previousValue[item[1]] = item.reduce((previousValue1, item1) =>{
            if (!previousValue1[item1]){
                previousValue1[item1] = [item1];
                return previousValue1;
            } else {
                previousValue1.push(item1[2]);
                return previousValue1;
            }
        },{})
        return previousValue
    } else {
        previousValue[item[1]]=1/*.push(item.reduce((previousValue1, item1) =>{
            if (!previousValue1[item1]){
                previousValue1[item1] = [item1];
                return previousValue1;
            } else {
                previousValue1.push(item1[2]);
                return previousValue1;
            }
        },{}));*/
        return previousValue
    }
},{})

console.log(newArray)

}())