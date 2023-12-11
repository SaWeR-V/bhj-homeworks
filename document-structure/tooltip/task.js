const tips = document.querySelectorAll('a.has-tooltip');
let activeTooltip = null;
const attributesKeys = ['top', 'left', 'right', 'bottom'];

function randomizer(max) {
    return Math.floor(Math.random() * max)
}

tips.forEach((item) => {
    let div = document.createElement('div');
    window.addEventListener('load', () => {
            div.className = 'tooltip';
            item.appendChild(div)
            div.innerText = item.title;
            item.style = ('position: relative');
            
            let randomIndex = randomizer(attributesKeys.length);
            let randomValue = attributesKeys[randomIndex];
            div.setAttribute('data-position', randomValue);

            let pos = div.getAttribute('data-position');
            if (pos === 'top') {
                div.style = ('position: absolute; top: -30px; left: 0');
            }
            else if (pos === 'bottom'){
                div.style = ('position: absolute; bottom: -30px; left: 0');
            }
            else if (pos === 'left'){
                div.style = ('position: absolute; top: 0px; left: -30px');
            }
            else if (pos === 'right'){
                div.style = ('position: absolute; top: 0px; right: -30px');
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

