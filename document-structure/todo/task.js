const input = document.getElementById('task__input');
const btn = document.getElementById('tasks__add');
let div = document.getElementById('tasks__list');

function addTask() {

    let newTask = `
        <div class="task">
            <div class="task__title">${input.value}</div>
            <a class="task__remove" href="#">&times</a>
        </div>
    `;

    div.insertAdjacentHTML('beforeend', newTask);
    input.value = null;
};

function removeTask(e) {
    const target = e.target;
    if (target.classList.contains('task__remove')) {
        const task = target.closest('.task');
        if (task) {
            task.remove();
        }
    }
}
          
btn.addEventListener('click', (e) => {
        if (input.value.trim()) {
            e.preventDefault();
        addTask();
    }
});

div.addEventListener('click', removeTask);



