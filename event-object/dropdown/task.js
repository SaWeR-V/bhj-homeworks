const buttons = document.querySelectorAll('div.dropdown__value');
const list = document.querySelector('.dropdown__list');
const links = document.querySelectorAll('li a');


function openMenu() {
    list.classList.toggle('dropdown__list_active')
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => openMenu(index))
    })

for (let i = 0; i < links.length; i++) {
    (links[i].addEventListener('click', () => {
        buttons[0].textContent = links[i].textContent;
        links[i].onclick = event.preventDefault();
        openMenu();
    }))
}