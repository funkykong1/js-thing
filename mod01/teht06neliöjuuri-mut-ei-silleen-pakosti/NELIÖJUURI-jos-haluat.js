// t vilho
'use strict';

const consent = confirm("Haluutko että lasken jonkun luvun neliöjuuren")

let txt;

if (consent)
{
    let nro = parseInt(prompt("Minkä neliöjuuri sais olla"))

    if(isNaN(nro))
    {
        alert("Et antanut hyvää numeroa niin keksin oman ja annan sen neliöjuuren :-]")
        nro = Math.ceil(Math.random()*100)
        txt = `Minun numeron ${nro} neliöjuuri on ${Math.sqrt(nro)}!!`
    }
    txt = `Numeron ${nro} neliöjuuri ON ${Math.sqrt(nro)}`
}
else
    txt = "No ei sit :-/"

tekstiSivulle(txt)


function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


