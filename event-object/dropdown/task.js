const button = document.getElementsByClassName('dropdown__value');
const list = document.getElementsByClassName('dropdown__list');



function openMenu() {
    for (let i = 0; i < list.length; i++){
        list[i].classList.toggle('dropdown__list_active')
    }
}

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', openMenu)
};