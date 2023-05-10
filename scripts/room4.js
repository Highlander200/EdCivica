var body = document.querySelector("body");
var button = document.getElementById("checkInput");
var h1 = document.querySelector("h1");

var inputs = [];
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

for(let i=1;i<=5;i++){
    inputs[i-1]=document.getElementById("input"+i);
}

function setCookie(cname, cvalue,cexpd) {
    const d = new Date();
    d.setTime(d.getTime() + (cexpd*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function newLevel(){
    setCookie("secret","true",1);
    window.location.href="win.html";
}

function reset() {
    error.hidden=true;
    button.innerHTML = "Enter";
    h1.innerHTML = "Quiz Livello 4";
}

function check() {
    let isRight = inputs[0].value=="energia-solare" && inputs[1].value=="energia-idroelettrica" && inputs[2].value=="energia-nucleare"  && inputs[3].value=="gas-naturale" && inputs[4].value=="carbone";
    if (isRight == true) {
        h1.innerHTML = "Quarto livello superato!<br>Adesso puoi andare alla pagina segreta!";
        body.style.background = "lightgreen";
        button.innerHTML = "You win!";
        rightSound.currentTime = 0;
        rightSound.play();

        setTimeout(newLevel, 4000);
    } else {
        h1.innerHTML = "💀💀💀💀💀";
        error.hidden=false;
        button.innerHTML = "Try again!";
        wrongSound.currentTime = 0;
        wrongSound.play();

        setTimeout(reset, 1000);
    }
}