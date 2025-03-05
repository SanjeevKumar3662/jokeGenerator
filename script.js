const xhr = new XMLHttpRequest();

function getJoke() {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText);
      const oldJoke = document.querySelector("#joke");

      const jokeText = document.createTextNode(data.value);
      oldJoke.firstChild.replaceWith(jokeText);
    }
  };
  xhr.send();
}

getJoke();

const btn = document.querySelector("#joke-btn");
btn.addEventListener("click", getJoke);
