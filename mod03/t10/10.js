"use strict";
const fs = document.querySelector('input[name=firstname]');
const ls = document.querySelector('input[name=lastname]');
const form = document.querySelector("form")
// result
const res =  document.getElementById("target")

form.addEventListener('submit', function(eventti)
{
    eventti.preventDefault();

    res.innerText = `Nimenne on ${fs.value} ${ls.value}`;
});

