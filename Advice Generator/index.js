// Getting the needed things
const changeBtn = document.getElementById("show-advice-btn");
const spanId = document.getElementById("number");
const content = document.getElementById("text-content");

//Url of the api
const URL = "https://api.adviceslip.com/advice";

// Loading the content
document.addEventListener("DOMContentLoaded", getAdvice);

// Fetching data and seting it

async function getAdvice() {
  try {
    changeBtn.disabled = true;
    const response = await fetch(URL);
    let data = await response.json();
    data = data.slip;

    changeBtn.disabled = false;
    spanId.innerText = data.id;
    content.innerText = data.advice;
  } catch (error) {
    content.innerText = "An error happened, try again later";
    changeBtn.disabled = false;
  }
}

changeBtn.addEventListener("click", getAdvice);
