'use strict';
const picArray = [
    {
        title: 'Title 1',
        caption: 'Caption 1',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
        image: {
            large: 'img/pic1.jpg',
            medium: 'thumbnails/pic1.jpg',
        },
    },
    {
        title: 'Title 2',
        caption: 'Caption 2',
        description:
            'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
        image: {
            large: 'img/pic2.jpg',
            medium: 'thumbnails/pic2.jpg',
        },
    },
    {
        title: 'Title 3',
        caption: 'Caption 3',
        description:
            'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
        image: {
            large: 'img/pic3.jpg',
            medium: 'thumbnails/pic3.jpg',
        },
    },
    {
        title: 'Title 4',
        caption: 'Caption 4',
        description:
            'Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
        image: {
            large: 'img/pic4.jpg',
            medium: 'thumbnails/pic4.jpg',
        },
    },
    {
        title: 'Title 5',
        caption: 'Caption 5',
        description:
            'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. ',
        image: {
            large: 'img/pic5.jpg',
            medium: 'thumbnails/pic5.jpg',
        },
    },
    {
        title: 'Title 6',
        caption: 'Caption 6',
        description:
            'Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh.',
        image: {
            large: 'img/pic6.jpg',
            medium: 'thumbnails/pic6.jpg',
        },
    },
    {
        title: 'Title 7',
        caption: 'Caption 7',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
        image: {
            large: 'img/pic7.jpg',
            medium: 'thumbnails/pic7.jpg',
        },
    },
    {
        title: 'Title 8',
        caption: 'Caption 8',
        description:
            'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. ',
        image: {
            large: 'img/pic8.jpg',
            medium: 'thumbnails/pic8.jpg',
        },
    },
    {
        title: 'Title 9',
        caption: 'Caption 9',
        description:
            'Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. ',
        image: {
            large: 'img/pic9.jpg',
            medium: 'thumbnails/pic9.jpg',
        },
    },
];
let modal = document.getElementById("modal")
let modalpic = document.getElementById("modalpic")
let span = document.getElementsByTagName("span")[0]

// vie paljon tilaa mutta onpa luettavampi meille ihmisille
let art;
let h2;
let fig;
let img;
let figc;
let p;

const target = document.getElementById("pictures")

// joo ei toiminut kun yritti vaan muuttaa inner html arvoa :p
for (let i = 0; i < picArray.length; i++)
{
    // tee KAIKKI ja laita niihin oikeat arvot
    art = document.createElement("article");
    art.className = "card"

    h2 = document.createElement("h2")
    h2.textContent = picArray[i].title
    fig = document.createElement("figure")
    // img ja figc tähän
    img = document.createElement("img")
    img.src = picArray[i].image.medium
    figc = document.createElement("figcaption")
    figc.textContent = picArray[i].caption

    p = document.createElement("p")
    p.textContent = picArray[i].description

    fig.appendChild(img)
    fig.appendChild(figc)

    art.appendChild(h2)
    art.appendChild(fig)
    art.appendChild(p)


    art.onclick = function () {
        modalpic.src = picArray[i].image.large
        modal.style.display = "block";
    }


    target.appendChild(art)

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";

  modal.style.scale = "1.03";
}
