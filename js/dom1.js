const div = document.querySelector("div");
console.log(div); // NodeList - это не живые снимки , которые были получены при загрузке страницы

// querySelectorALL - делает псевдомасси , у которого нет никаких свойств

console.log([...div]); // из псевдомассива в массив делает

const h1 = document.getElementsByTagName("h1");
console.log(h1); // HTML Collections  -  это живые коллекции , которые будут измениться в случае изменение 


// Узлы 
div.nextSibling // получить следующий элемент текстовый узел, то есть это может быть пробелом(текст)
div.nextElementSibling // получить следующий элемент тег 


div.firstChild // получить первый текстовый узел , то есть это может быть первая строка в тексте
div.firstElementChild // получить первый элеметн внутри в допустим в div

document.body // получить тело 
document.links // получить все ссылки
document.forms // поулчить все формы

// BOM - browser object model все глобальные перменные предаставляет нам браузер 

/* window(setTimeout, alert), navigator, location  */