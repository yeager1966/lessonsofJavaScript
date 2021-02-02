"use strict";

const box = document.getElementById("box"), // к айди
    btns = document.getElementsByTagName("button"), // к тегу
    circles = document.getElementsByClassName("circle"),// к классу
    hearts = document.querySelectorAll(".heart"),// к селоктору с таким классом(псевдомассив)
    oneHeart = document.querySelector(".heart");// к первому селектору(псевдомассив)

/* box.style.backgroundColor = "pink";
box.style.width = "100px";
box.style.height = "100px"; */
box.style.cssText = "background-color:pink; width: 100px; height:100px; border-radius:50%";


btns[1].style.borderRadius = "50%";
circles[0].style.backgroundColor = "red";

