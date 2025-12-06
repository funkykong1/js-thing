'use strict';

'use strict';


const input = document.getElementById("query")
const form = document.getElementById("tv_search")
const article_div = document.getElementById("results")
form.addEventListener('submit', async function(evt) {
    evt.preventDefault();
    try {

        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input.value}`);
        const jsonData = await response.json();

        article_div.innerHTML = ""

        for (let i = 0; i < jsonData.length; i++)
        {
            // en halua vahingossa hakea 300 vastausta
            if (i === 20)
                break;

            const article = document.createElement("article")
            const title = document.createElement("h2")
            const desc = document.createElement("div")
            const pic = document.createElement("img")
            const link = document.createElement("a")
            title.textContent = jsonData[i].show.name
            link.href = jsonData[i].show.url
            link.textContent = "Lisätietoja"
            desc.innerHTML += jsonData[i].show.summary
            pic.src = jsonData[i].show.image.medium ? jsonData[i].show.image.medium : "https://placehold.co/210x295?text=Not%20Found"

            article.appendChild(title)
            article.appendChild(pic)
            article.appendChild(desc)
            article.appendChild(link)

            article_div.appendChild(article)


        }

    } catch (error) {
        console.log(error.message);
    }
});



