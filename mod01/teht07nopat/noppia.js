// t vilho
'use strict';

const dice = prompt("Monta noppaa haluat heittää?")
const rolls = prompt("Monta kertaa heitetään?")

let txt;
let sum = 0;
for (let i = 0; i < rolls; i++)
{
    sum += Math.ceil(Math.random()*6)
}

txt = `heittojen summa on ${sum}`

tekstiSivulle(txt)


function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


