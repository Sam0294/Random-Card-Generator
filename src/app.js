/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
//CONSTANTES
const boton1 = document.querySelector("#boton1");
const boton2 = document.querySelector("#boton2");
const simbols = ["♤", "♣", "♡", "♦"];
const values = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
// MAZO DE CARTAS
let cards = [];
let position = 0;

// DESORDENAR MAZO
const desordenar = Array => {
  var t = Array.sort(function() {
    return Math.random() - 0.5;
  });
  return [...t];
};

//FUNCION BASE, COLOCA LAS CARTAS EN EL MAZO SI NO SON REPETIDAS
const generarMazo = () => {
  if (position > cards.length - 1) {
    console.log(cards);
    alert("Ya sacaste todas las cartas!!");
    position = 0;
  }

  let carta = cards[position];
  document.querySelector("#num").innerHTML = carta[1];
  document.querySelector("#palo").innerHTML = carta[0];
  document.querySelector("#palo2").innerHTML = carta[0];
  position = position + 1;
};
/* BORRAR MAZO */
const nuevoMazo = () => {
  cards = desordenar(cards);
  position = 0;
};

// -------LISTENER-------
boton1.addEventListener("click", () => {
  generarMazo();
});

boton2.addEventListener("click", () => {
  nuevoMazo();
});

window.onload = function() {
  for (let i = 0; i < simbols.length; i++) {
    for (let j = 0; j < values.length; j++) {
      cards.push(simbols[i] + values[j]);
    }
  }
  cards = desordenar(cards);
  console.log(cards);
};
