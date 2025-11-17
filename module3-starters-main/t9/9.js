"use strict";
// input kenttä
const inp = document.getElementById("calculation")
// lopputulos kenttä
const res = document.getElementById("result")
// nappula
const btn = document.getElementById("start")

// ekat ja tokat numerot - teoriassa olisi myös mahdollista tehdä monikkoja loputtomasti
let nums = [];

// annettu operaattori
let ops = ["+", "-", "/", "*"]

let op;
function calc()
{
    // hankitaan sen dropdown jutun arvo
    let str = document.getElementById("calculation").value

    for (let i = 0; i < ops.length; i++)
    {
        nums = str.split(ops[i])
        // löyty käytetty operaattori, poistutaan loopista
        if(!isNaN(nums[1]))
        {
            op = ops[i]
            break;
        }

    }





    let num3;
    nums[0] = parseInt(nums[0])
    nums[1] = parseInt(nums[1])
    // käydään kaikki vaihtoehdot läpi :-)
    switch (op)
    {
        case "+":
            num3 = nums[0] + nums[1]
            break
        case "-":
            num3 = nums[0] - nums[1]
            break
        case "*":
            num3 = nums[0] * nums[1]
            break
        case "/":
            num3 = nums[0] / nums[1]
            break
        default:
            num3 = `Annoit surkean operaation ${op} ei käy. Anna + tai - tai * tai /`
            break

    }
    res.textContent = num3.toString();
}

btn.addEventListener("click", calc)