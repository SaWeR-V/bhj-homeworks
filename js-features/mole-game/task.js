const frags = document.getElementById('dead');
const miss = document.getElementById('lost');
const rick = document.getElementsByClassName('rick');
let fragsCounter = parseInt(frags.textContent, 10);
let missCounter = parseInt(miss.textContent, 10);
let hole = null;



function getHole(index){
    return hole = document.getElementById(`hole${index}`)};

function shot() {
    let audio = new Audio();
        audio.src = './media/magnum.mp3';
        audio.autoplay = true;
}

function roar() {
    let audio = new Audio();
        audio.src = './media/zombie_hit.mp3';
        audio.autoplay = true;
}

function milk() {
    let audio = new Audio();
        audio.src = './media/milk.mp3';
        audio.autoplay = true;
}

function showRick(){
    rick[0].style.display = "block";
    setTimeout(() => rick[0].style.display = "none", 500)
}


for (let i = 1; i < 10; i++) {
    const currentHole = getHole(i);
    currentHole.onclick = function() {
        getHole(i);
        shot();
        if (hole.className.includes('hole_has-mole')){
            fragsCounter++;
            frags.textContent = fragsCounter;
            showRick();
            setTimeout(() => roar(), 40);
                if (fragsCounter === 10) {
                    setTimeout(() => alert('Ты победил!'), 50) 
                    fragsCounter = frags.textContent = 0; 
                    missCounter = miss.textContent = 0; 
                }
        }
        else {
            missCounter++;
            miss.textContent = missCounter;
            milk();
                if (missCounter === 5) {
                    setTimeout(() => alert('Ты проиграл!'), 50) 
                    fragsCounter = frags.textContent = 0; 
                    missCounter = miss.textContent = 0;
                }
        }

    }
};


