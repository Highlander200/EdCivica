var body = document.querySelector("body");
var button = document.querySelector("#checkInput");
var h1 = document.querySelector("h1");

var passcode_input = document.querySelector("#passcode_input");
var rightSound = document.querySelector("#rightSound");
var wrongSound = document.querySelector("#wrongSound");

button.addEventListener("click", check);

passcode_input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        button.click();
    }
});

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
    body.style.background = "white";
    button.innerHTML = "Check input";
    h1.innerHTML = "Escape Room";
    passcode_input.value = "";
}

function check() {
    let passcode = passcode_input.value;
    if (passcode == "room1") {
        h1.innerHTML = "Fourth level passed!<br>You can now go to the secret page!";
        body.style.background = "lightgreen";
        button.innerHTML = "You win!";
        rightSound.currentTime = 0;
        rightSound.play();

        setTimeout(newLevel, 4000);
    } else {
        h1.innerHTML = "💀💀💀💀💀";
        body.style.background = "crimson";
        button.innerHTML = "Try again!";
        wrongSound.currentTime = 0;
        wrongSound.play();

        setTimeout(reset, 1000);
    }
}