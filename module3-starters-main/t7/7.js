const pic = document.querySelector("img")
const trig = document.getElementById("trigger")

function on()
{
    // tää toimii paremmin kuin innerhtml muuttaminen
    pic.src = "img/picB.jpg"
}
function off()
{
    pic.src = "img/picA.jpg"
}


trig.addEventListener("mouseover", on)
trig.addEventListener("mouseleave", off)
