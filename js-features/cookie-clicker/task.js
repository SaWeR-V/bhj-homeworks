const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");


cookie.onclick = function counterIncreaser(){
    let counterNumber = parseInt(counter.textContent, 10);
    counterNumber++;
    counter.textContent = counterNumber;
    cookie.width += 3;
    cookie.heigth += 3;

}