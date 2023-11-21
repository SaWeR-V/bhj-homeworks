const buttons = document.querySelectorAll('div.dropdown__value');
const list = document.querySelectorAll('.dropdown__list');
const links = Array.from(document.querySelectorAll('li a'));



function openMenu(index) {
    list[index].classList.toggle('dropdown__list_active')
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => openMenu(index))
    })

for (let i = 0; i < links.length; i++) {
    (links[i].addEventListener('click', () => {
        button[0].textContent = links[i].textContent;
        links[i].href = "javascript:void(0)";
        openMenu();
    }))
}