const questions = document.querySelectorAll(".questions");

questions.forEach((question) => {
  const btn = question.querySelector(".main-btn");

  btn.addEventListener("click", () => {
    questions.forEach((item) => {
      if (question !== item) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
