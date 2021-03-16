let res = "";

function plant(word) {
    for (let i = word.length; i--;) {
        res += word[i];
    }

}

plant("aVava");
console.log(res);

function paliglot(word) {
    word = word.toLowerCase();
    return word === word.split("").reverse().join(""); // split -разбиваем , reverse - развернули , и join склеили обратно в строку
}
console.log(paliglot("aVavas"));