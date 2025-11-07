'use strict';

let kaikki = [];
let i = -1
let j = 1

while(i != 0)
{
    i = parseInt(prompt(`Anna ${j}. numero!! nollasta lopettaa`))
    kaikki.push(i)
    j++
}


kaikki.sort((a,b) => a - b)
kaikki.reverse()

for (let i = 0; i < kaikki.length; i++)
{
    console.log(kaikki[i])
}



