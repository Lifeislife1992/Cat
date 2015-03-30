/**
 * Created by Виктор on 30.03.2015.
 */
function writeCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        /* Учебник Моррисон М.-Изучаем JavaScript(2012) предлагает устаревший метод
         date.toGMTString(), сейчас вместо него date.toUTCString(); */
        expires = "; expires=" + date.toUTCString();
    }
    /*Баг в WebStorm: строка воспринимается как HTMLCollection,
    поэтому подчеркивает. Не обращать внимания.*/
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        /*Добавлент .trim() так как в Chrome (Версия 41.0.2272.101 m) Windows 8
         в переменную подтягивается куки с пробелом. */
        var c = cookies[i].trim();
        /* Нужно проверять длину переменной "с", иначе строка
        while (c.charAt(0) == "") зацыкливается при отсутствии куки*/
        if (c.length > 0) {
            while (c.charAt(0) == "")
                c = c.substring(1, c.length);
            if (c.indexOf(searchName) == 0)
                return c.substring(searchName.length, c.length);
        }
    }
    return null;
}


function eraseCookie(name) {
    writeCookie(name, "", -1);
}