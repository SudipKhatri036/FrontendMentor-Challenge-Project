# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./Screenshot/Screenshot%20Website%20design.png)
![](./Screenshot/Screenshot%20Mobile%20design.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Responsive web site
- User Friendly web page

### What I learned

While working through this project i was stuck in the validation Card Number input. While i wanted to add space while user enters pin no and also validate if the user entered value is number only but the space make it difficut and i am happy that i solved the problem. styling it also was a hard and after this i learned to position them in responsive manner.

```js
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
```

### Continued development

I will continue to focusing on position property of css , responsiveness, mobile first approach and writing javascript code clean and simple manner . I'm still not comfortable with position property of css. I will learn more cool stuf of css to make website more beautiful.

## Author

- Website - [Sudip Khatri]
- Frontend Mentor - [@SudipKhatri036](https://www.frontendmentor.io/profile/SudipKhatri036)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
- github - [@SudipKhatri036](https://github.com/SudipKhatri036)
