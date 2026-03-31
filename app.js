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

/*need to add event listener on the form button to save the json of the prompt into the navigator memory*/ 