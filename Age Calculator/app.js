// Getting all the input Elements and Labels
const yearInput = document.getElementById("year-input");
const monthInput = document.getElementById("month-input");
const dayInput = document.getElementById("day-input");
const labelEl = document.querySelectorAll("label");

// Getting Buttong Element
const showAgeBtn = document.getElementById("checkAge");

// Getting result showing elements
const yearSpanEL = document.getElementById("year-span");
const monthSpanEL = document.getElementById("month-span");
const daySpanEL = document.getElementById("day-span");

// Getting Error showing output
const errorOutput = document.querySelectorAll(".error");

// function for getting total days in specific month
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

// Adding click event listener to showAge button
showAgeBtn.addEventListener("click", () => {
  // Getting current full date
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const currentDay = date.getDay();

  // Getting user value from input
  const birthYear = +yearInput.value;
  const birthMonth = +monthInput.value;
  const birthDay = +dayInput.value;

  // Getting total Day in month in the user birth month
  const daysInMonth = getDaysInMonth(birthYear, birthMonth);

  // Checking birthYear input is not empty and greater than current year
  if (!birthYear) {
    errorOutput[2].textContent = "This field is required";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    labelEl[2].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorOutput[2].textContent = "";
    yearInput.style.borderColor = " hsl(0, 0%, 86%)";
    labelEl[2].style.color = "hsl(0, 1%, 44%)";
  }

  if (birthYear > currentYear) {
    errorOutput[2].textContent = "Must be in past";
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
    labelEl[2].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorOutput[2].textContent = "";
    yearInput.style.borderColor = "hsl(0, 0%, 86%)";
    labelEl[2].style.color = "hsl(0, 1%, 44%)";
  }

  // Checking birthMonth input is not empty and greater than 12
  if (!birthMonth) {
    errorOutput[1].textContent = "This field is required";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    labelEl[1].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorOutput[1].textContent = "";
    monthInput.style.borderColor = "hsl(0, 0%, 86%)";
    labelEl[1].style.color = "hsl(0, 1%, 44%)";
  }

  if (birthMonth > 12) {
    errorOutput[1].textContent = "Must be a valid month";
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    labelEl[1].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorOutput[1].textContent = "";
    monthInput.style.borderColor = "hsl(0, 0%, 86%)";
    labelEl[1].style.color = "hsl(0, 1%, 44%)";
  }

  // Checking birthDay input is not empty and greater than daysInMonth
  if (!birthDay) {
    errorOutput[0].textContent = "This field is required";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    labelEl[0].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorOutput[0].textContent = "";
    dayInput.style.borderColor = "hsl(0, 0%, 86%)";
    labelEl[0].style.color = "hsl(0, 1%, 44%)";
  }

  if (birthDay > daysInMonth) {
    errorOutput[0].textContent = "Must be a valid day";
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    labelEl[0].style.color = "hsl(0, 100%, 67%)";
  } else {
    errorOutput[0].textContent = "";
    dayInput.style.borderColor = "hsl(0, 0%, 86%)";
    labelEl[0].style.color = "hsl(0, 1%, 44%)";
  }

  // Getting age in year month and day
  let ageInDay;
  if (currentDay < birthDay) {
    ageInDay = currentDay + 30 - birthDay;
  } else {
    ageInDay = currentDay - birthDay;
  }
  let ageInYear = currentYear - birthYear;

  let ageInMonth;

  if (currentMonth < birthMonth) {
    ageInMonth = currentMonth + 12 - birthMonth;
    ageInYear -= 1;
  } else {
    ageInMonth = currentMonth - birthMonth;
  }

  // Showing result in the DOM
  monthSpanEL.textContent = ageInMonth;
  daySpanEL.textContent = ageInDay;
  yearSpanEL.textContent = ageInYear;
});
