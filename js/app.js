document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#button").addEventListener("click", (e) => {
    const dadJokesUrl = "https://icanhazdadjoke.com/";
    const dadJokeP = document.querySelector("#dadJoke");
    console.log(dadJokesUrl);
    fetch(dadJokesUrl, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((responseData) => responseData.json())

      .then((jsonData) => {
        console.log(jsonData);
        dadJokeP.innerText = jsonData.joke;
      })
      .catch((err) => {
        console.warn("uh oh, stinky");
      });
  });
});
