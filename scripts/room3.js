var body = document.querySelector("body");
var button = document.getElementById("checkInput");
var h1 = document.querySelector("h1");

var passcodeInput = document.getElementById("passcodeInput");
var rightSound = document.getElementById("rightSound");
var wrongSound = document.getElementById("wrongSound");
var error = document.getElementById("error");

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

function newLevel() {
    window.location.href = "room4.html";
}

function reset() {
    error.hidden=true;
    button.innerHTML = "Enter";
    h1.innerHTML = "Quiz Livello 3";
    passcodeInput.value="";
}

function check() {
    let passcode=passcodeInput.value.toLowerCase();
    if (passcode=="durata") {
        h1.innerHTML = "Terzo livello superato!";
        body.style.background = "lightgreen";
        button.innerHTML = "Hai vinto!";
        rightSound.currentTime = 0;
        rightSound.play();

        setTimeout(newLevel, 4000);
    } else {
        h1.innerHTML = "💀💀💀💀💀";
        error.hidden=false;
        button.innerHTML = "Riprova!";
        wrongSound.currentTime = 0;
        wrongSound.play();

        setTimeout(reset, 2000);
    }
}