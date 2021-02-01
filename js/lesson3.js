"use strick"; // говорим что используем новый формат кода (строгий режим) 

const category = 'toys';
/* console.log('https://someurl.com/'+category+'/'); */ // Это было раньше сейчас это мало где используют
console.log(`https://somelink.ru/${category}/5`); // сейчас юзают это , для этого нужны коссые ковычки


const username = 'Ivan';
alert(`Привет,${username}`);

console.log(4 + 5);

let incr = 10,
    decr = 10;

incr++; // инкримент , постфиксная форма с начало возвращает начальную форму потом измененную
decr--; // дикримент , постфиксная форма с начало возвращает начальную форму потом измененную

console.log(incr);
console.log(decr);

let incrim = 10,
    decrim = 10;


console.log(++incrim); // инкримент , префиксная форма сразу выводит измененную форму
console.log(--decrim); // дикримент , префиксная форма сразу выводит измененную форму

/* && и возвращает нам тру если оба тру , если одни из них тру а другой фолс , то будет фолс
||  или  если один из них будт тру то и весь процесс будет тру  */

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
 
const isChecked = true,
isClose = false;


console.log(isChecked || isClose);

// ! - оператор отрицание , фолс меняет на тру , тру на фолс , !isClose
// != не равен 

alert( !true ); // false
alert( !0 ); // true


console.log(2+2*2 !=8); // то есть 6 не равен 8 

console.log(2+2*2 !=='6'); // тут числовой тип даннных не равен строчному типу данных


console.log(1/0);

let name = "Olzhas";
console.log(`Hello , ${name}`);




/// преобразование типов

let value = false;
// console.log(typeof value); // boolean 

value = String(value); 
console.log(typeof value);




