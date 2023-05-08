var button = document.querySelector("#checkInput");
var h1 = document.querySelector("h1");

var passcode_input = document.querySelector("#passcode_input");

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

function win(){
    window.location.href="win.html";
}

function right() {
    h1.innerHTML="Right!!!";
    setTimeout(win,2000);
}
function wrong() {
    window.location.href = "Wrong...";
}
function check() {
    let passcode = passcode_input.value;
    h1.innerHTML="Mmmmhh...";

    if (passcode == "admin") {
        setTimeout(right, 3000);
    } else {
        setTimeout(wrong, 3000);
    }
}