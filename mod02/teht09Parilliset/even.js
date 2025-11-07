'use strict';

let arr = [-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12];

function even(lista)
{
    let ev = []
    for (let i = 0; i < lista.length; i++)
    {
        if(lista[i] % 2 === 0 && lista[i] !== 0)
            ev.push(lista[i])
    }
    // Se palauttaa jotain :O
    return ev
}

console.log(arr)
console.log(even(arr))


