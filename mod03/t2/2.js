'use strict';
const target = document.getElementById("target");

// kolme kohdetta
const li1 = document.createElement("li");
li1.textContent = "First item";

const li2 = document.createElement("li");
li2.textContent = "Second item";
li2.className = 'my-item';

const li3 = document.createElement("li");
li3.textContent = "Third item";

// lisää targettiin
target.appendChild(li1)
target.appendChild(li2)
target.appendChild(li3)

