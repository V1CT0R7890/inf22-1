let hunger = 0;
let happiness = 10;
let cleanliness = 10;

function updateStatus() {
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('cleanliness').innerText = cleanliness;
}

function feed() {
    hunger = Math.max(hunger - 1, 0);
    happiness = Math.min(happiness + 1, 10);
    updateStatus();
}

function play() {
    happiness = Math.min(happiness + 2, 10);
    cleanliness = Math.max(cleanliness - 1, 0);
    updateStatus();
}

function clean() {
    cleanliness = 10;
    updateStatus();
}

function decreaseStatus() {
    hunger = Math.min(hunger + 1, 10);
    happiness = Math.max(happiness - 1, 0);
    cleanliness = Math.max(cleanliness - 1, 0);
    updateStatus();

    if (hunger === 10 || happiness === 0 || cleanliness === 0) {
        alert('Seu Tamagotchi está em mau estado!');
    }
}

setInterval(decreaseStatus, 5000);

document.addEventListener('DOMContentLoaded', updateStatus);
