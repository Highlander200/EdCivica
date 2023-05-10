function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


function checkSecretPage(){
    let isQuizFinished=getCookie("secret");
    if(isQuizFinished=="true"){
        let secretLink=document.getElementById("secretPage");
        secretLink.classList="nav-link active";
        secretLink.href="./secret.html";
    }else{
        window.location.href="index.html";
    }
}

checkSecretPage();