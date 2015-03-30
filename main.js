function greetUser() {
    var userName = readCookie("cat_username");
    if (userName) {
        alert("Привет," + userName + "! Я скучал по тебе");
    }
    else {
        alert("Привет, я твой кот. Приятно познакомиться!");
    }
}

function helloText() {
    if (userName) {
        alert ("Ты помнишь про меня," + userName + ".Спасибо!")
    }
    else {
        var userName = prompt("Как тебя зовут?", "Введите Ваше имя.");
        if (userName) {
            alert("Привет," + userName + ". Приятно познакомиться!");
            writeCookie("cat_username", userName, 5*365);
            document.getElementById("catNormal").src = "image/2.png";
        }
    }
}

function sadCat() {
    document.getElementById('catNormal').src = 'image/3.png';
}

function reloadPage() {
    location.reload();
}

function askWhereAreYou() {
    alert("Ты где?");
}

function stopReloadPage() {
    clearInterval(pageRefresh);
}
setTimeout(sadCat, 7*1000);
setTimeout(askWhereAreYou, 8*1000);
var pageRefresh = setInterval(reloadPage, 5*1000);

function resizeCat() {
    document.getElementById("catNormal").style.height = document.body.clientHeight * 0.6 + "px";
}