// input kentät
const in1 = document.getElementById("num1")
const in2 = document.getElementById("num2")
// lopputulos kenttä
const res = document.getElementById("result")
// nappula
const btn = document.getElementById("start")

// toivottu operaatio add/sub/multi/div
let op;

// käytettävät numerot (piti tehdä näin koska jouduin vääntämään tän kanssa)
let n1 = 0;
let n2 = 0;

function calc()
{
    // hankitaan sen dropdown jutun arvo
    op = document.getElementById("operation").value
    console.log(op)
    n1 = parseInt(in1.value)
    n2 = parseInt(in2.value)

    let num3 = 0;
    // käydään kaikki vaihtoehdot läpi :-)
    switch (op)
    {
        case "add":
            num3 = n1 + n2
            break
        case "sub":
            num3 = n1 - n2
            break
        case "multi":
            num3 = n1 * n2
            break
        case "div":
            num3 = n1 / n2
            break
        default:
            console.log("mitä")
            break

    }
    res.textContent = num3.toString();
}

btn.addEventListener("click", calc)