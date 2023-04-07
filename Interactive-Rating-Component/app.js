// Getting Necessary Elements
const cardContainer = document.getElementById("card-content");
const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");

let ratingValue;

// Adding event Listener
window.addEventListener("DOMContentLoaded", () => {
  // Looping through rating btns ,adding active Class and geti btn text
  ratingBtns.forEach((ratingBtn) => {
    ratingBtn.addEventListener("click", (e) => {
      document.querySelector(".active")?.classList.remove("active");
      ratingBtn.classList.add("active");
      ratingValue = e.target.innerText;
    });
  });

  // Adding Click Event in Submit Btn
  submitBtn.addEventListener("click", () => {
    ratingBtns.forEach((btn) => {
      if (btn.classList.contains("active")) {
        renderData();
      } else {
        return;
      }
    });
  });
});

// Function for showing Thank You state content
function renderData() {
  cardContainer.innerHTML = `<div id="after-rating">
    <img src="/images/illustration-thank-you.svg" alt="Thank You Svg" />
    <p class="rating-detail">
      You selected <span id="selected-point">${ratingValue}</span> out of 5
    </p>
    <h2>Thank You!</h2>
    <p class="para-el">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </div>`;
}
