const ulElement = document.querySelector("#prompt-list");

    fetch("/prompt.json")
      .then((response) => response.json())
      .then((prompts) => {
        for (const prompt of prompts) {
           const liElement = document.createElement("li");
           liElement.className = "display-card";

           const t = document.createElement("div");
           t.innerText = prompt.title;
           liElement.appendChild(t);

           const c = document.createElement("div");
           c.innerText = prompt.category;
           liElement.appendChild(c);

           const p = document.createElement("div");
           p.innerText = prompt.prompt;
           liElement.appendChild(p);

           ulElement.appendChild(liElement);
        }
});

/*envoyer les resultat du form directement en creant un div directement 
voir meme faire un fonction qui recupere les donnees du form soit envoye dans la boucle d'au dessus*/

const button = document.querySelector("button");
    

button.addEventListener("click", (event) => {
    event.preventDefault();
    
    const formData = new FormData(document.querySelector("form"));
    const title = formData.get("title");
    const category = formData.get("category");
    const prompt = formData.get("prompt");
 
    if (!title || !category || !prompt) return;

    const liElement = document.createElement("li");
    liElement.className = "display-card";
 
    const t = document.createElement("div");
    t.innerText = title;
    liElement.appendChild(t);
 
    const c = document.createElement("div");
    c.innerText = category;
    liElement.appendChild(c);
 
    const p = document.createElement("div");
    p.innerText = prompt;
    liElement.appendChild(p);
 
    ulElement.appendChild(liElement);
});


