let body=document.querySelector("body");
let button=document.querySelector("#checkInput");
let h1= document.querySelector("h1");

let passcode_input=document.querySelector("#passcode_input");
let rightSound=document.querySelector("#rightSound");
let wrongSound=document.querySelector("#wrongSound");
var questions = ["Che stanza è 1", "Che stanza è 2"];
var level=0;
function newLevel(){
    level++;
    h1.innerHTML=questions[level];
    body.style.background = "white";
    button.innerHTML="Check input";
}

function check(){
    let passcode=passcode_input.value;
    if(level==0){
        if(passcode == "room1"){
            h1.innerHTML = "First level passed!";
            body.style.background = "lightgreen";
            button.innerHTML = "You win!";
            rightSound.currentTime=0;
            rightSound.play();
    
            setTimeout(newLevel,2000);
        }else{
            h1.innerHTML = "💀💀💀💀💀";
            body.style.background = "crimson";
            button.innerHTML = "Try again!";
            wrongSound.currentTime=0;
            wrongSound.play();
        }
    }else if(level==1){
        if(passcode == "room2"){
            h1.innerHTML = "Second level passed!";
            body.style.background = "lightgreen";
            button.innerHTML = "You win!";
            rightSound.currentTime=0;
            rightSound.play();
    
            setTimeout(newLevel,2000);
        }else{
            h1.innerHTML = "💀💀💀💀💀";
            body.style.background = "crimson";
            button.innerHTML = "Try again!";
            wrongSound.currentTime=0;
            wrongSound.play();
        }
    }
}

button.addEventListener("click",check);