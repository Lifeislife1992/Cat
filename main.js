function greetUser() {
    if (navigator.cookieEnabled) {
        var userName = readCookie("cat_username");

        if (userName) {
            alert("Привет," + userName + "! Я скучал по тебе");
        }
        else {
            alert("Привет, я твой кот. Приятно познакомиться!");
        }
    }
    else {
        alert("Привет, я твой кот. Приятно познакомиться!");
    }
}

function helloText() {
    if (navigator.cookieEnabled) {
        var userName = readCookie("cat_username");
        if (userName) {
            document.getElementById("catNormal").src = "image/2.png";
            alert ("Ты помнишь про меня," + userName + ".Спасибо!");
        }
        else {
            userName = prompt("Как тебя зовут?", "Введите Ваше имя.");
            if (userName) {
                alert("Привет," + userName + ". Приятно познакомиться!");
                writeCookie("cat_username", userName, 5*365);
                document.getElementById("catNormal").src = "image/2.png";
            }
        }
    }
    else {
        alert("Извините ваш браузер не поддерживает cookie");
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
    /* Для корректной работы нужно обязательно добавить единицы измерения ("px"),
    в книге Моррисон М.-Изучаем JavaScript(2012) это не указано */
    document.getElementById("catNormal").style.height = document.body.clientHeight * 0.6 + "px";
}