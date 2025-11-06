// t vilho
'use strict';

const nopat = parseInt(prompt("Anna noppien määrä"))
const luku = parseInt(prompt("Minkä luvun haluat?"))

let p = 0;
let lucky_rolls = 0;

let txt

// no joo voi sen näinkin tehdä
for (let i = 0; i < 10000; i++)
{
    for(let j = 0; j < nopat; j++)
    {
        p += Math.floor(Math.random()*6)+1
    }

    if(p == luku)
        lucky_rolls++;

    p = 0
}

lucky_rolls = lucky_rolls/10000
lucky_rolls.toFixed(2)
txt = `silmälukujen ${luku} suhde muihin heittoihin noppamäärällä ${nopat} on ${lucky_rolls*100}%`
tekstiSivulle(txt)


function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


