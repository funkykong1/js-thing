'use strict';
console.log('the script starts');


async function etiTiedot() {

    try {
        const response = await fetch('http://127.0.0.1:3000/airport/00A');

        let jason = await response.json();

    } catch (error) {
        console.log(error.message);
    }
}

etiTiedot();

