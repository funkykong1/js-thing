'use strict';

// ehdokkaiden lukumäärä
let candidates = parseInt(prompt("Monta ehdokasta on yhteensä?"))
// äänestäjien lukumäärä
let voters = 0;
// niiden lista
let arr = []
let nimi = "";

document.querySelector(`.output1`).textContent = "äänestys on konsolissa";

// hankitaan nimet
for (let i = 0; i < candidates; i++)
{
    nimi = prompt(`Mikä on ${i+1}. ehdokkaan nimi?`).toLowerCase()
    arr.push({name:nimi, votes:0})
}

voters = parseInt(prompt("Monta äänestäjää on tapahtumassa?"))

for (let i = 0; i < voters; i++)
{
    // käytetään muuttujaa kahdesti !!
    nimi = prompt(`Antakaa ${i+1}. äänestäjän valinta. tyhjä tai kehno vastaus on tyhjä ääni`).toLowerCase()
    if(arr.some(cand => cand.name == nimi))
        arr.find(cand => cand.name == nimi).votes += 1;
}

arr.sort((a,b) => b.votes - a.votes)


// tasapeli väh. kahden välillä
if (arr[0].votes == arr[1].votes)
{
    console.log("Voittaja ei ole ketään sillä äänestys on tasapeli!!")
}
// selvä voittaja
else
    console.log(`Voittaja on ${arr[0].name} ${arr[0].votes} äänellä!!`)

// tulosta konsoliin
for (let i = 0; i < arr.length; i++)
{
    console.log(`${arr[i].name}: ${arr[i].votes} ääntä`)
}


