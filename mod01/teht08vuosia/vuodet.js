// t vilho
'use strict';

const eka = parseInt(prompt("anna kaksi vuotta niin kerron niiden välillä olevat karkausvuodet. anna eka vuosi"))
const toka = parseInt(prompt("toka"))

const lista = document.getElementById("lista");
let yr = eka

let vuodet = [];



for (let v = eka; v < toka; v++)
    if (v%4 === 0)
    {
        // jaollinen sadalla JA neljällä sadalla
        if(v%100 === 0)
        {
            if(v%400 === 0)
                vuodet.push(v)
        }
        else
            vuodet.push(v)

    }

// aivan järkyttävä miten tää toimii
vuodet.forEach(vuosi =>
{
    let li = document.createElement("li");
    li.textContent = vuosi
    lista.appendChild(li);
});

document.querySelector(`.output1`).textContent = "Välivuodet ovat :";


