'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const target = document.getElementById("target")
let li;

for (let i = 0; i < students.length; i++)
{
    li = document.createElement("option");
    li.value = students[i].id
    li.textContent = students[i].name;
    target.appendChild(li)
}
