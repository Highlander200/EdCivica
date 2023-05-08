function setup() {
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
}

