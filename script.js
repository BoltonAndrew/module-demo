import buttonPress from "./scripts/list.js";
const body = document.querySelector("body");
const bttn = document.querySelector("#list-bttn");

let p = document.createElement("p");
p.innerText = "This is in JS";

body.append(p);

bttn.addEventListener("click", buttonPress);
