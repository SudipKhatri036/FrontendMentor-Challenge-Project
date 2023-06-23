// Getting required Input Element
const billAmountInput = document.getElementById("bill-amt");
const totalPersonInput = document.getElementById("people-num");
const customTipPercentageInput = document.querySelector(".tip-percent-input");

// Getting Element to show result and error
const errorOutputEl = document.querySelectorAll(".error-output");
const tipPerPersonEl = document.getElementById("tip-per-person");
const totalTip = document.getElementById("tip-total");

// Getting Buttons
const buttonConainer = document.getElementById("grid-container");
const resetButton = document.querySelector("#result-section button");
const buttons = buttonConainer.getElementsByTagName("button");

let totalTipPerPerson;
let totalTipResult;
let selectedEl;
resetButton.classList.add("disable");

buttonConainer.addEventListener("click", showTip);

// function for showing tip

function showTip(event) {
  // Getting input value and converting into number
  const billAmountEntered = +billAmountInput.value;
  const totalPersonEntered = +totalPersonInput.value;

  // Checking if the value in the input field is empty
  if (billAmountEntered === 0 || totalPersonEntered === 0) {
    errorOutputEl[0].style.display = "block";
    errorOutputEl[1].style.display = "block";

    billAmountInput.classList.add("error");
    totalPersonInput.classList.add("error");

    return;
  }

  // storing selected btn into
  selectedEl = event.target;

  // checking if the user clicked nodename is button
  if (selectedEl.nodeName === "BUTTON") {
    const selectedPercentage = +selectedEl.dataset.percent;
    totalTipPerPerson = Math.round(
      (billAmountEntered * selectedPercentage) / 100
    );

    totalTipResult = totalTipPerPerson * totalPersonEntered;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("active");
    }

    tipPerPersonEl.textContent = totalTipPerPerson;

    totalTip.textContent = totalTipResult;

    // Add active class to the clicked button
    event.target.classList.add("active");
    resetButton.classList.remove("disable");
  }

  // checking if the user clicked nodename is input
  if (selectedEl.nodeName === "INPUT") {
    customTipPercentageInput.addEventListener("input", () => {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
      }
      const customValue = +customTipPercentageInput.value;

      // Checking if the user custom percentage value is greater than 100
      if (customValue > 100) {
        alert("Can't be more than 100%");
        tipPerPersonEl.textContent = 0;
        totalTip.textContent = 0;
        return;
      }

      totalTipPerPerson = Math.round((billAmountEntered * customValue) / 100);

      totalTipResult = Math.round(totalTipPerPerson * totalPersonEntered);

      tipPerPersonEl.textContent = totalTipPerPerson;

      totalTip.textContent = totalTipResult;

      resetButton.classList.remove("disable");
    });
  }

  resetButton.classList.remove("disable");

  errorOutputEl[0].style.display = "none";
  errorOutputEl[1].style.display = "none";

  billAmountInput.classList.remove("error");
  totalPersonInput.classList.remove("error");
}

// Function for reset
resetButton.addEventListener("click", () => {
  selectedEl.classList.remove("active");
  resetButton.classList.add("disable");

  billAmountInput.value = "";
  totalPersonInput.value = "";

  tipPerPersonEl.textContent = 0;
  totalTip.textContent = 0;
});
