'use strict';

let nimi = prompt("Mikä on nimenne ??")

// tää on ihan tyhmä tapa hankkia random numero kuka tän keksi
// juu käytetään vaa sitä math randomia neljä kertaa olis ihan tyhmää antaa parametrit siihen
let number = Math.ceil(Math.random()*4)
let txt

if (number == 1)
    txt = `${nimi}, oot gryffindor o_O`
else if(number == 2)
    txt = `${nimi}, oot slytherin -_-`
else if(number == 3)
    txt = `${nimi}, oot ravenclaw :/`
else if(number == 4)
    txt = `${nimi}, oot hufflepuff :-[ paska säkä`
else
    `${nimi}, et kuulu mihkään!!`


document.querySelector('.output1').textContent = txt;

