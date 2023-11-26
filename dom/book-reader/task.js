const buttons = [...document.querySelectorAll('a.font-size')];
const text = document.querySelector('.book__content');
let activeButton = buttons.find(
    btn => btn.classList.contains('font-size_active')
  );


buttons.forEach((elem) => {
    elem.addEventListener('click', function fontSwitch(e){
        e.preventDefault()
        activeButton.classList.remove('font-size_active');
        elem.classList.add('font-size_active');
        activeButton = elem;
            if (elem.getAttribute('data-size') === 'big') {
                text.classList.add('book_fs-big')
                text.classList.remove('book_fs-small');
            }
            else if (elem.getAttribute('data-size') === 'small') {
                text.classList.remove('book_fs-big');
                text.classList.add('book_fs-small');
            } 
            else {
                text.classList.remove('book_fs-big', 'book_fs-small');
            }
    })
})