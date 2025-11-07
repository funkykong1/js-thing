

'use strict';

let kaikki = [];
let i = -1

// heitä noppaa kunnes tulee 6
function die()
{
    while (i != 6)
    {
        i = Math.floor(Math.random()*6)+1
        kaikki.push(i)
    }
}

die()

const lista = document.getElementById("lista");


for (let i = 0; i < kaikki.length; i++)
{
    let li = document.createElement("li");
    li.textContent = kaikki[i]
    lista.appendChild(li);
}

tekstiSivulle("Nopanheitot :")

function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}





