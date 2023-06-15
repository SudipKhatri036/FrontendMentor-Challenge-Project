// Getting required elements
const emailInputEl = document.getElementById("email-input");
const mainContentContainer = document.getElementById("form-container");
const successMessageContainer = document.getElementById(
  "success-message-container"
);
const emailSpan = document.getElementById("email-span");
// Getting required Button
const subscribeBtn = document.querySelector(".sub-btn");
const dismissBtn = document.querySelector(".suc-btn");

// Throwing Error Output required Elements
const errorOutputEl = document.getElementById("error-output");

let emailEntered;

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  emailEntered = emailInputEl.value;

  let validRegex = /^([a-zA-z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (emailEntered.match(validRegex)) {
    mainContentContainer.style.display = "none";

    emailSpan.textContent = emailEntered;
    successMessageContainer.style.display = "block";
  } else {
    errorOutputEl.style.display = "block";
    emailInputEl.classList.add("error");
  }
});

dismissBtn.addEventListener("click", () => {
  mainContentContainer.style.display = "flex";

  emailSpan.textContent = "";
  successMessageContainer.style.display = "none";

  errorOutputEl.style.display = "none";
  emailInputEl.classList.remove("error");
  emailInputEl.value = "";
});
