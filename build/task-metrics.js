'use strict'

const wrapper = document.querySelector('.wrap');

// интрополяция + используй для этого стили
// они предпочтительны
// только в случае, если ты не можешь манипулировать ими, тогда через JS
// на уроке я показывал это как "возможность которую дает на JS", но злоупотреблять не стоит
wrapper.style.width = 200 + 'px';
wrapper.style.height = 200 + 'px';
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'space-between';
wrapper.style.backgroundColor = 'white';

const template = document.querySelector('#tooltip');
const clone = document.importNode(template.content, true);
const tooltip = clone.querySelector('.tooltip');
tooltip.style.background = 'red';
tooltip.style.position = 'absolute';

wrapper.addEventListener('mouseover', async (event) => {
    const hoverObj = event.target;

    // надеюсь ты знаешь разницу между cloneNode и importNode
    // const asd = template.childNodes
    // const clone = template.cloneNode(true);
    // const tooltip = clone.querySelector('.tooltip')

    // console.log(tooltip)


    let tooltipMetric;
    let hoverObjMetric;
    let scrollY;
    let scrollX;

function searchData (){
    tooltipMetric = tooltip.getBoundingClientRect();
    hoverObjMetric = hoverObj.getBoundingClientRect();
    scrollX = window.scrollX;
    scrollY = window.scrollY;
    tooltip.textContent = hoverObj.dataset.tooltipText;
    document.body.prepend(tooltip);
}

    switch (hoverObj.dataset.tooltipText) {
        case ('top'):
            searchData ();
            tooltip.style.top = scrollY + hoverObjMetric.top - tooltipMetric.width + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left + 'px';
            break;
        case ('left'):
            searchData ();
            tooltip.style.top = scrollY + hoverObjMetric.top + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left - tooltipMetric.height + 'px';
            break;


        case ('bottom'):
            searchData ();
            tooltip.style.top = scrollY + hoverObjMetric.bottom + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left + 'px';
            break;
        case ('right'):
            searchData ();
            tooltip.style.top = scrollY + hoverObjMetric.top + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left + hoverObjMetric.width + 'px';
            break;
    }
    // hoverObj.addEventListener('mouseout', () => {
    //     tooltip.remove();/*почему здесь не работает clone.remove() ?*/
    //     // content не является элементов, это фрагмент
    // })
    // if (hoverObj === wrapper){
    //
    // }
});


    // fetch('https://course-project-kviatsinski-default-rtdb.firebaseio.com/orders/-MS3r_uQ_I9J2Wr1L177')
    //     .then(response => response.json())
    //     .then(result => {console.log(result)})

// let data = [5,8];

// data.append('name', '5');
// data.append('age', '8');

// let ddds = JSON.stringify(data)
// console.log(ddds)
// fetch(
//     'https://course-project-kviatsinski-default-rtdb.firebaseio.com/orders.form-data', {
//         method: 'Post',
//         headers: {
//             "Content-Type": "multipart/form-data"
//         },
//         body: data,
//         // redirect: 'follow'
//     })
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
