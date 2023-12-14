const tips = document.querySelectorAll('a.has-tooltip');
let activeTooltip = null;
const attributesKeys = ['top', 'left', 'right', 'bottom'];

function randomizer(max) {
    return Math.floor(Math.random() * max)
}

tips.forEach((item) => {
    let div = document.createElement('div');

    window.addEventListener('load', () => {
            item.insertAdjacentElement('afterend', div);
            div.className = 'tooltip';
            div.innerText = item.title;
            
            let randomIndex = randomizer(attributesKeys.length);
            let randomValue = attributesKeys[randomIndex];
            div.setAttribute('data-position', randomValue);

            const rect = item.getBoundingClientRect();

            let pos = div.getAttribute('data-position');
            if (pos === 'top') {
                div.style.top = `${rect.top - div.offsetHeight}px`;
                div.style.left = `${rect.left}px`;
            }
            else if (pos === 'bottom'){
                div.style.top = `${rect.bottom}px`;
                div.style.left = `${rect.left}px`;
            }
            else if (pos === 'left'){
                div.style.top = `${rect.top}px`;
                div.style.left = `${rect.left - div.offsetWidth}px`;
            }
            else if (pos === 'right'){
                div.style.top = `${rect.top}px`;
                div.style.left = `${rect.right}px`;
            }
    })

    item.addEventListener('click', (e) => {
        e.preventDefault();
        if (activeTooltip) {
            activeTooltip.classList.remove('tooltip_active');
        }

        if (div !== activeTooltip){
            div.classList.add('tooltip_active');
            activeTooltip = div
        }

        else {
            activeTooltip = null
        }
    })    
})

