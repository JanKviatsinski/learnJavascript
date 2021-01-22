'use strict'

const  wrapper = document.querySelector('.wrap');
wrapper.style.width = 200 + 'px';
wrapper.style.height = 200 + 'px';
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.alignItems = 'center';
wrapper.style.justifyContent = 'space-between';
wrapper.style.backgroundColor = 'white';

wrapper.addEventListener('mouseover', (event) =>{
    const hoverObj = event.target;
    const template = document.querySelector('#tooltip');
    const clone = document.importNode(template.content, true);
    const tooltip = clone.querySelector(".tooltip")
    tooltip.textContent = hoverObj.dataset.tooltipText;
    tooltip.style.background='red';
    tooltip.style.position ='absolute';
    const hoverObjMetric = hoverObj.getBoundingClientRect();
    document.body.prepend(clone);
    const tooltipMetric = tooltip.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;

    switch (hoverObj.dataset.tooltipText) {
        case ('top'):
            tooltip.style.top = scrollY + hoverObjMetric.top - tooltipMetric.width + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left + 'px';
            break;
        case ('left'):
            tooltip.style.top = scrollY + hoverObjMetric.top + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left - tooltipMetric.height + 'px';
            break;
        case ('bottom'):
            tooltip.style.top = scrollY +hoverObjMetric.bottom + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left + 'px';
            break;
        case ('right'):
            tooltip.style.top = scrollY +hoverObjMetric.top + 'px';
            tooltip.style.left = scrollX + hoverObjMetric.left + hoverObjMetric.width + 'px';
    }

    hoverObj.addEventListener('mouseout', ()=>{
tooltip.remove();/*почему здесь не работает clone.remove() ?*/
    })
});