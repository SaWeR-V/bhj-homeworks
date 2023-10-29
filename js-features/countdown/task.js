const timerStart = document.getElementById('timer');

let timer = () => {
    timerStart.innerHTML -= 1;
    if (+(timerStart.innerHTML) === 0){
        clearInterval(reverse)
        alert("Вы победили в конкурсе!")
    }
}

let reverse = setInterval(timer, 1000);
