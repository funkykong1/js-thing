'use strict';

let nro1 = prompt("anna eka numero"), nro2= prompt("anna TOKA numero"), nro3= prompt("anna 3. numero");

let sum = nro1+nro2+nro3;
let prod = nro1*nro2*nro3;
let avg = sum/3;

document.querySelector('.output1').textContent = `SUMMA on ${sum}`;
document.querySelector('.output2').textContent = `TULO on ${prod}`;
document.querySelector('.output3').textContent = `KESKIARVO on ${avg}`;
