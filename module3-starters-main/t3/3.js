'use strict';
const target = document.getElementById("target");
const names = ['John', 'Paul', 'Jones'];
let li;

for (let i = 0; i < names.length; i++)
{
    li = document.createElement("li");
    li.textContent = names[i];
    target.appendChild(li)
}
