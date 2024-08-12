"use strict";

let userName = prompt("Як тебе звати?");
alert(`Привіт, ${userName}`);

const CURRENT_YEAR = 2024;
let birthYear = prompt("Вкажи свій рік народження:");
let age = CURRENT_YEAR - birthYear;
alert(`Тобі ${age} років`);

let sideLength = prompt("Вкажи довжину сторони квадрата (в одиницях):");
let perimeter = 4 * sideLength;
alert(`Периметр квадрата дорівнює ${perimeter} одиниць`);
