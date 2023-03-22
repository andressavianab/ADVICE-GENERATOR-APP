let endPoint = "https://api.adviceslip.com/advice";
let adviceID = document.querySelector(".advice-id");
let adviceText = document.querySelector(".advice");
let button = document.querySelector("#button");

getAPI();

async function getAPI() {
  const answer = await fetch(endPoint);
  const advicesAPI = await answer.json();
  const advice = advicesAPI.slip;
  randomAdvice();
  function randomAdvice() {
    adviceID.innerText = `
        ADVICE #${advice.id}`;
    adviceText.innerText = `
        "${advice.advice}"`;
  }
}

button.addEventListener("click", () => {
  getAPI();
});