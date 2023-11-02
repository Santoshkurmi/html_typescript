import { changeColor } from "./fun.js";

alert("Hello")
const tiger = document.getElementsByTagName("h1").item(0);

tiger?.style.color = "red";
tiger.addEventListener('click', changeColor)
