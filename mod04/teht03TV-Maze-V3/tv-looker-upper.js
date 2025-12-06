'use strict';
console.log('the script starts');
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const pic = document.getElementById("pic")

async function etiTiedot() { // asynchronous function is defined by the async keyword

    try {                                               // error handling: try/catch/finally
        const response = await fetch('http://127.0.0.1:3000/airport/00A');    // starting data download, fetch returns a promise which contains an object of type 'response'
        let jason = await response.json()[0];
        title.textContent = jason[0]["show"]["name"]
        desc.textContent = jason[0]["show"]["summary"]

    title.textContent = jason
    } catch (error) {
        console.log(error.message);
    }
}

etiTiedot();

