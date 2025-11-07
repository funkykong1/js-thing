'use strict';

let arr = ["Oggy", "Joey", "Deedee", "Marky", "Jack"];

function concat(lista)
{
    let str = "";
    for (let i = 0; i < lista.length; i++)
    {
        str += lista[i];
    }
    // Se palauttaa jotain :O
    return str;
}

tekstiSivulle(concat(arr))

function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


