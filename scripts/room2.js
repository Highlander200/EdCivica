var body = document.querySelector("body");
var button = document.getElementById("checkInput");
var h1 = document.querySelector("h1");

var inputs = [];
var rightSound = document.getElementById("rightSound");
var wrongSound = document.getElementById("wrongSound");

button.addEventListener("click", check);

body.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        button.click();
    }
});

for(let i=1;i<=5;i++){
    inputs[i-1]=document.getElementById("check"+i);
}

function newLevel() {
    window.location.href = "room3.html";
}

function reset() {
    body.style.background = "white";
    button.innerHTML = "Enter";
    h1.innerHTML = "Quiz Livello 2";
}

function check() {
    let isRight=false;
    isRight=!inputs[0].checked && inputs[1].checked && !inputs[2].checked && inputs[3].checked && inputs[4].checked;
    
    if (isRight==true) {
        h1.innerHTML = "Secondo livello superato!";
        body.style.background = "lightgreen";
        button.innerHTML = "Hai vinto!";
        rightSound.currentTime = 0;
        rightSound.play();

        setTimeout(newLevel, 4000);
    } else {
        h1.innerHTML = "💀💀💀💀💀";
        body.style.background = "brown";
        button.innerHTML = "Riprova!";
        wrongSound.currentTime = 0;
        wrongSound.play();

        setTimeout(reset, 2000);
    }
}