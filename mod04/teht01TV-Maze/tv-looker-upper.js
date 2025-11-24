'use strict';

const form = document.getElementById("tv")


form.addEventListener('submit', async function(evt) {
    // mitä tää edes tekeee
    evt.preventDefault();

    const input = document.querySelector('input[name=term]').value;
    try {
        let response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
        let jason = await response.json();
        console.log(jason);
    } catch (error) {
        console.log(error.message);
    }

});