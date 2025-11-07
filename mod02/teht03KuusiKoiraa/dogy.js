'use strict';

let kaikki = [];

for (let i = 1; i<=6; i++)
{
    kaikki.push(prompt(`Anna ${i}. koiran nimi`))
}

const lista = document.getElementById("lista");

kaikki.sort()
kaikki.reverse()

for (let i = 0; i < kaikki.length; i++)
{
    let li = document.createElement("li");
    li.textContent = kaikki[i]
    lista.appendChild(li);
}

tekstiSivulle("Koirien nimet vastakkaisessa aakkosjärjestyksessä :")

function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}





