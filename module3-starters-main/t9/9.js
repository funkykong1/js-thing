// input kenttä
const inp = document.getElementById("calculation")
// lopputulos kenttä
const res = document.getElementById("result")
// nappula
const btn = document.getElementById("start")

// ekat ja tokat numerot - teoriassa olisi myös mahdollista tehdä monikkoja loputtomasti
let nums = [];
let nums2 = [];

// annettu operaattori
let op = ""

let first = true;


function calc()
{
    // hankitaan sen dropdown jutun arvo
    let str = document.getElementById("calculation").value



    for (let i = 0; i > str.length; i++)
    {
        let s = str.charAt(i)

        if (s === typeof(Number))
            nums.push(str.charAt(i))
        else
        {
            op = str.charAt(i)
        }
    }



    let num3 = 0;
    // käydään kaikki vaihtoehdot läpi :-)
    switch (op)
    {
        case "+":
            num3 = n1 + n2
            break
        case "-":
            num3 = n1 - n2
            break
        case "*":
            num3 = n1 * n2
            break
        case "/":
            num3 = n1 / n2
            break
        default:
            console.log("mitä")
            break

    }
    res.textContent = num3.toString();
}

btn.addEventListener("click", calc)