function createFieldset(legend, inputType, inputName, ...rest){
    // console.log(...rest)
const template = document.querySelector('#fieldset');

const fieldsetLegend = template.content.querySelector("legend");
    fieldsetLegend .textContent = legend;

const labelsWrap = template.content.querySelector('.order-form__labels-wrap');


        let labels = rest.reduce((prev, item, i) => {
            const label = document.createElement('label');
            label.textContent = item;
            const input = document.createElement('input');
            input.type = inputType;
            input.name = inputName;
            label.prepend(input);
            prev.push(label);
            return prev;
        }, []);

        labelsWrap.prepend(...labels);




const formProducts = document.querySelector('.order-form__products');

const clone = document.importNode(template.content, true);

formProducts.append(clone);
    // labelsWrap.innerHTML.prepend(...labels);
 // console.log(labelsWrap.innerHTML);
}

createFieldset('Сыр белый 8руб/500г', 'radio',
    'white-cheese', 300, 500, 700, 1000, 1500);

createFieldset('Творог 4руб/500г', 'radio',
    'curd',500, 700, 1000, 1500);

createFieldset('Сметана 4руб/500г', 'radio',
    'sour-cream',500, 1000, 1500);

function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter1 = makeCounter();
let counter2 = makeCounter();

console.log( counter1() ); // 0
console.log( counter1() ); // 1

console.log( counter2() )


