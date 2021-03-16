const now = new Date();
/* const now = new Date("2020-05-01"); */
/* const now = new Date(2020,5,1); */
/* const now = new Date(0); // 0 - милисекунд */

/* console.log(now); */
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());

console.log(now.getDay()); // номер дня недели

console.log(now.getTimezoneOffset()); // различия в минутах в нашем часовом поясе и в UTC


// set 
const newTime = new Date();

console.log(newTime.setHours(18)); // установили 18 часов
console.log(newTime);