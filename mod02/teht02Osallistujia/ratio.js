// t vilho
'use strict';

let kaikki = [];
// dokumentin lista
const count = parseInt(prompt("Monta osallistujaa teillä on?"))


for (let i = 1; i<=count; i++)
{
    kaikki.push(prompt(`Anna ${i}. osallistujan nimi`))
}

const lista = document.getElementById("lista");

kaikki.sort()

for (let i = 0; i < kaikki.length; i++)
{
    let li = document.createElement("li");
    li.textContent = kaikki[i]
    lista.appendChild(li);
}

tekstiSivulle("Tapahtuman jäsenet aakkosjärjestyksessä :")

function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


