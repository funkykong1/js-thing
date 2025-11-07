
'use strict';

let kaikki = [];
let i = -1
let j = 1

while(true)
{
    i = parseInt(prompt(`Anna ${j}. numero!! Sama numero lopettaa`))

    // poistutaan vaan loopista kun löydetään olemassaoleva numero
    if (kaikki.includes(i))
    {
        break;
    }
    kaikki.push(i)
    j++
}

kaikki.sort((a,b) => b-a)

for (let i = 0; i < kaikki.length; i++)
{
    console.log(kaikki[i])
}



