// t vilho
'use strict';

let numerot = [];
// dokumentin lista
const lista = document.getElementById("lista");
// lol \n toimii edelleen
numerot.push(parseInt(prompt(`Anna viisi numeroa niin tulostan ne käänteisjärjestyksessä\n anna eka nro`)))
numerot.push(parseInt(prompt("toka")))
numerot.push(parseInt(prompt("kolmas")))
numerot.push(parseInt(prompt("four")))
numerot.push(parseInt(prompt("5")))

// looppi joka alkaa vikasta indeksistä ja menee nollaa kohti :p
for (let i = numerot.length-1; i >= 0; i--)
{
    let li = document.createElement("li");
    li.textContent = numerot[i]
    lista.appendChild(li);
}

tekstiSivulle("tadaa !!!numeronne ovat :")

function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


