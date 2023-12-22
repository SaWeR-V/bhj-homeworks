const editor = document.getElementById('editor');
const storedData = localStorage.getItem('data');

editor.addEventListener('input', () => {
    let data = editor.value;
    localStorage.setItem('data', data)
});

window.addEventListener('load', () => {
    editor.value = storedData;
})

editor.insertAdjacentHTML('afterend', `
    <center>
        <button id="reset">Очистить</button>
    </center>
`);

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', () => {
    editor.value = null;
    localStorage.clear();
});