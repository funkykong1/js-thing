// mitä tää edes TEKEE
'use strict';

let yr = prompt("Anna vuosiluku niin kerron onko se karkausvuosi")

let txt;
// jaollinen neljällä (ei jakojäännöstä)
if (yr%4 == 0)
{
    // jaollinen sadalla JA neljällä sadalla
    if(yr%100 == 0)
    {
        if(yr%400 == 0)
            txt = "ON karkausvuosi!!!!"
        else
            txt = "EI OLE karkausvuosi!!!!"
    }
    else
        txt = "ON karkausvuosi!!!!"

}
else
    txt = "EI OLE karkausvuosi!!!!"

tekstiSivulle(`Vuosiluku ${yr} ` + txt)


function tekstiSivulle(txt, luokka = "output1")
{
    document.querySelector(`.${luokka}`).textContent = txt;
}


