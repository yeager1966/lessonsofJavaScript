const form = document.querySelector('.add'),

    btn = form.querySelector('button'),
    overlay = document.querySelector('.overlay');

/* btn.onclick = function(){ // стаырй формат обработчика событий 
     alert('idiot');
}; */

/* ЧТОБЫ ПОВЕСИТЬ ОБРАБОТЧИК СОБЫТИЙ НА ПСЕВДОМАССИВ , НУЖНО ДЛЯ НАЧАЛО ПЕРЕБРАТЬ ЭТОТ ПСЕВДОМАССИВ(querySelectorAll("")) именно приставка all делает псеавдомассив*/


/* btn.addEventListener('click' , udalete);  */ // новый формат обработчика событий


/* (e)=> event это объект , чтобы посмотреть его свойства пишем console.log(e)получение информации о событии */

/* btn.addEventListener('click' , ()=>{
    alert("АХАХАХАХХ ПОПАЛСЯ");
}); */

// УДАЛЕНИЕ ОБРАБОТЧИКОВ


/* const udalete = (e)=>{
    alert("why?");
    e.target.remove(); 
}; */


/* const deleteEl = (e)=>{
      console.log(e.target);
}; 
btn.addEventListener("mouseenter" , deleteEl);
btn.removeEventListener("mouseenter",deleteEl); */


/* 
let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener('click', deleteElement);
    }
};
btn.addEventListener("click" , deleteElement); */



let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    /*   i++;
      if (i == 1) {
          btn.removeEventListener('click', deleteElement);
      } */
};
btn.addEventListener("click", deleteElement);
// всплытие событий это когда обработчик событий срабатывает на самом вложенном потом на родителей
overlay.addEventListener("click", deleteElement);


const link = form.querySelector('a');
link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target);
});


// опции
// btn.addEventListener("click" , deleteElement , {once: true});