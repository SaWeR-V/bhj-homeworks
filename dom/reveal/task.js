const block = document.querySelectorAll('div.reveal');

window.addEventListener('scroll', () => 
    block.forEach((elem) => {
        const { top, bottom } = elem.getBoundingClientRect()
        console.log({ top, bottom});

        if (top < 680) {
            elem.classList.add('reveal_active')
        }
        if (top < 0 || top > 900) {
            elem.classList.remove('reveal_active')
        }
    })
);
