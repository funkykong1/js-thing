'use strict';


const input = document.getElementById("query")
const form = document.getElementById("tv_search")
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    try {

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`);
        const jsonData = await response.json();
        console.log("löydettiin seuraavanlainen ohjelma:")
        console.log( `nimi: ${jsonData[0]["show"]["name"]}`)
        console.log( `kuvaus: ${jsonData[0]["show"]["summary"]}`)
    } catch (error) {
        console.log(error.message);
    }
});


