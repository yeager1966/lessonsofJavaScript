/* const timerId = setTimeout(function () {
    alert("AHAHAHHAHA");
}, 2000); // 2000 - задержка 2000 милиСекунд



const timerID = setTimeout(function (text) {
    console.log("Hello");
}, 2000, "Hello"); */



/////////////////////////////////////
const btn = document.querySelector("button");
let timeID;
let i = 0;

/* btn.addEventListener("click", (e) => {
    timeID = setInterval(logger, 2000);
});


function logger() {
    if (i === 3) {
        clearInterval(timeID);
    }
    console.log("something");
    i++;
} */
//////////////////////////

// будет ждать пока все не выполнится
/* let id = setTimeout(function log() {
    console.log("hello");
    id = setTimeout(log, 500);
}); */

////////// анимация с кубиком

function myAnimation() {
    const elem = document.querySelector(".box");
    let pos = 0;


    const id = setInterval(frame, 10);

    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
btn.addEventListener("click", myAnimation);