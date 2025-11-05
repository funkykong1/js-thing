// t vilho
'use strict';

// hankii luku
const luku = parseInt(prompt("Anna minulle luku niin kerron onko se alkuluku"))

let txt = `Luku ${luku} on alkuluku!!`

// katotaan että annettu luku ei oo tyhmä
if(luku < 0 || luku === 1 || luku === 0)
    txt = `joo no ei se ${luku} varmaan ole alkuluku`

for (let i = 2; i<luku; i++)
{
    // jos se on jaollinen jollain niin ei tarvii mennä kaikkien muiden lukujenkaan läpi
    // lähetään vaan veks loopista ja sanotaan että se ei ole alkuluku
    if(luku % i === 0)
    {
        txt = `${luku} EI ole alkuluku. se on jaollinen luvulla ${i}`
        break
    }
}


tekstiSivulle(txt)


function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


