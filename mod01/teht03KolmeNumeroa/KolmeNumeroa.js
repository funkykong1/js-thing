'use strict';

let nro1 = parseInt(prompt("anna eka numero")), nro2= parseInt(prompt("anna TOKA numero")), nro3= parseInt( prompt("anna 3. numero"));

let sum = nro1+nro2+nro3;
let prod = nro1*nro2*nro3;
let avg = sum/3;

document.querySelector('.output1').textContent = `SUMMA on ${sum}`;
document.querySelector('.output2').textContent = `TULO on ${prod}`;
document.querySelector('.output3').textContent = `KESKIARVO on ${avg}`;
