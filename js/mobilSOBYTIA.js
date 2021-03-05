//touchstart касаться
//touchmove зажимать 
//touchend когда оторвали зажали и оторвали палец

//touchenter
//touchleave
//touchcancel

window.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box");

    /*   box.addEventListener("touchstart", (e) => {
          e.preventDefault();
          console.log("start")
          console.log(e.touches)
      });

      box.addEventListener("touchmove", (e) => {
          e.preventDefault();
          console.log("start")
          console.log(e.touches)
      }); */

    box.addEventListener("touchstart", (e) => {
        e.preventDefault();
        console.log("start")
        console.log(e.targetTouches)
    });

    box.addEventListener("touchmove", (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });
});

// touches - говорит о количество пальцев
// targetTouches - количество в данный момент касающийся пальцев
// changedTouches  + touchend говорит какой палец убран