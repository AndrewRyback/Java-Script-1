"use strict";

let radius = prompt("Вкажи радіус кола (в одиницях):");
let area = Math.PI * Math.pow(radius, 2);
alert(`Площа кола дорівнює ${area.toFixed(2)} одиниць квадратних`);

let distance = prompt("Вкажи відстань між двома містами (в кілометрах):");
let time = prompt("За скільки годин хочеш дістатися?");
let speed = distance / time;
alert(
  `Необхідно рухатися зі швидкістю ${speed.toFixed(
    2
  )} км/год, щоб встигнути вчасно`
);

const EXCHANGE_RATE = 0.91;
let dollars = prompt("Вкажи суму в доларах:");
let euros = dollars * EXCHANGE_RATE;
alert(`${dollars} доларів дорівнює ${euros.toFixed(2)} євро`);
