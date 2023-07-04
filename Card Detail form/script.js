// Getting all the element required to show detail
const cardNumberEl = document.getElementById("card-number");
const userCardNameEl = document.getElementById("name-el");
const cardExpYear = document.getElementById("exp-year");
const cardExpMonth = document.getElementById("exp-month");
const userCvcNumber = document.getElementById("cvc-number");

// Getting Required Div for showing result
const successDivEl = document.getElementById("succes-stat");
const formEL = document.querySelector("form");

// Getting Required Input Elements
const inputElements = document.querySelectorAll("input");
const userNameInput = document.getElementById("user-name");
const userCardNumInput = document.getElementById("card-num");
const userExpMonthInput = document.getElementById("exp-month-input");
const userExpYearInput = document.getElementById("exp-year-input");
const userCvcNumInput = document.getElementById("cvc-num");

// Getting require error Output
const errorOutputElements = document.querySelectorAll(".error-output");
const errorInName = document.querySelector(".name-error");
const errorInCardNum = document.querySelector(".card-num-error");
const errorInDate = document.querySelector(".exp-date-error");
const errorInCvc = document.querySelector(".cvc-error");

// Getting required Button
const confirmBtn = document.getElementById("confirm-btn");
const continueBtn = document.getElementById("continue-btn");

confirmBtn.addEventListener("click", addUserCardDetail);

function addUserCardDetail(event) {
  // Preventing default for button
  event.preventDefault();

  // Getting The user value
  const userNameEntered = userNameInput.value;
  const userExpMonthEntered = +userExpMonthInput.value;
  const userExpYearEntered = +userExpYearInput.value;
  const userCvcNumberEntered = +userCvcNumInput.value;

  // Validating Card Number calling function
  validateCardNumber();

  // Validating form if the form is clear performing dom manipulation
  if (validateForm()) {
    cardNumberEl.textContent = validateCardNumber();
    userCardNameEl.textContent = userNameEntered;
    cardExpYear.textContent = userExpYearEntered;
    // Checking if user enterd month less than 10
    if (userExpMonthEntered < 10) {
      cardExpMonth.textContent = `0${userExpMonthEntered}`;
    } else {
      cardExpMonth.textContent = userExpMonthEntered;
    }
    userCvcNumber.textContent = userCvcNumberEntered;
  } else {
    return;
  }

  formEL.style.display = "none";
  successDivEl.style.display = "block";
}

// Adding event listener for returing to form part
successDivEl.addEventListener("click", () => {
  // hiding error showing elements
  errorInName.style.display = "none";
  errorInCardNum.style.display = "none";
  errorInDate.style.display = "none";
  errorInCvc.style.display = "none";

  // Setting the value of input field to ""
  userNameInput.value = "";
  userCardNumInput.value = "";
  userExpMonthInput.value = "";
  userExpYearInput.value = "";
  userCvcNumInput.value = "";

  // Using for loop to remove all the red borders of input element
  for (let i = 0; i < inputElements.length; i++) {
    inputElements[i].style.border = "1px solid hsl(270, 3%, 87%)";
  }

  successDivEl.style.display = "none";
  formEL.style.display = "block";
});

function validateForm() {
  // Checking if the username is not empty and lenght is less than 2
  if (userNameInput.value === "" || userNameInput.value.length <= 2) {
    errorInName.style.display = "block";
    userNameInput.style.border = "1px solid hsl(0, 100%, 66%)";
    return;
  }

  // Checking if the user CardNumber is not empty
  if (userCardNumInput.value === "") {
    errorInCardNum.style.display = "block";
    userCardNumInput.style.border = "1px solid hsl(0, 100%, 66%)";
    return;
  }

  // Checking if user Expiry month input value is not empty
  if (
    userExpMonthInput.value === "" ||
    userExpMonthInput.value > 12 ||
    userExpMonthInput.value < 1
  ) {
    if (userExpMonthInput.value > 12) {
      errorInDate.textContent = "It's not a month";
    } else {
      errorInDate.textContent = "Can't be blank";
    }
    errorInDate.style.display = "block";
    userExpMonthInput.style.border = "1px solid hsl(0, 100%, 66%)";
    return;
  }

  // Getting current Full Year
  const currentYear = new Date();

  // removing the first two number of current year and storing in new variable
  let lastTwoNumberInYear = currentYear.getFullYear().toString().substring(2);
  lastTwoNumberInYear = Number(lastTwoNumberInYear);

  // Checking if the user Expiry Year is not empty and is greater than current year

  if (
    userExpYearInput.value === "" ||
    userExpYearInput.value < lastTwoNumberInYear
  ) {
    errorInDate.style.display = "block";
    userExpYearInput.style.border = "1px solid hsl(0, 100%, 66%)";
    return;
  }

  // Checking  if CVC number is not empty
  if (userCvcNumInput.value === "") {
    errorInCvc.style.display = "block";
    userCvcNumInput.style.border = "1px solid hsl(0, 100%, 66%)";
    return;
  }

  return true;
}

// Function for validating Card Number
function validateCardNumber() {
  const value = userCardNumInput.value;

  if (/\d/.test(value)) {
    if (/^[a-zA-Z]+$/.test(value)) {
      // Contains only alphabetic letters
      errorInCardNum.style.display = "block";
    } else if (/[a-zA-Z]/.test(value)) {
      // Contains alphabetic letters anywhere
      userCardNumInput.classList.add("error");
      errorInCardNum.style.display = "block";
    } else {
      // Contains a combination of numbers and alphabetic letters
      const newValue = value
        .replace(/\s/g, "")
        .replace(/(\d{4})/g, "$1 ")
        .trim();
      userCardNumInput.value = newValue;
      return newValue;
    }
  }
}

// Listening to input event and adding space after 4 number
userCardNumInput.addEventListener("input", function (event) {
  var target = event.target;
  var inputVal = target.value;

  // Remove any existing spaces from the input value
  var strippedVal = inputVal.replace(/\s/g, "");

  // Split the stripped value into groups of four characters
  var groups = strippedVal.match(/.{1,4}/g);

  // Join the groups with a space between them
  var formattedVal = groups.join(" ");

  // Set the formatted value back to the input field
  target.value = formattedVal;
});
