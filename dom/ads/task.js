const phrases = document.querySelectorAll('span.rotator__case');
let currIndex = 0

function rotatePhrases() {
    phrases.forEach((element, i) => {
        if (i === currIndex) {
            element.classList.add('rotator__case_active')
        }
        else {
            element.classList.remove('rotator__case_active')
        }
    })

    currIndex = (currIndex + 1) % phrases.length

}

setInterval(rotatePhrases, 1000)