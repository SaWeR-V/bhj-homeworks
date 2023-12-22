const modal = document.getElementById('subscribe-modal');
const closePopup = modal.querySelector('div.modal__close');

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie ? cookie.substring(name.length + 1) : null;
}

window.addEventListener('load', () => {
    const popUpShown = getCookie('popUpShown');

    if (popUpShown !== '1') {
        modal.classList.add('modal_active')
    }
});

closePopup.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    setCookie('popUpShown', 1);
});

/* Дорогие товарищи преподаватели! Если не сложно - напишите пожалуйста в фидбэк до ДЗ 
рабочий способ, как развернуть сервер node.js. Спасибо!*/