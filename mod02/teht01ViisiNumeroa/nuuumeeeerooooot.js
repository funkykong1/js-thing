// t vilho
'use strict';

let numerot = [];


// dokumentin lista
const lista = document.getElementById("lista");

for (let i = 0; i < 5; i++)
{
    numerot.push(parseInt(prompt("Anna minulle numeroita yht. 5 niin laitan ne listaan konsoliin väärte päin")))
}

console.log("tadaa !!!!! numeronne ovat :")

// looppi joka alkaa vikasta indeksistä ja menee nollaa kohti :p
for (let i = numerot.length-1; i >= 0; i--)
{
    console.log(`${numerot[i]}`)
}



