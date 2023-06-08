const showMenuBtn = document.getElementById("open-btn");
const closeMenuBtn = document.getElementById("close-btn");

const menu = document.querySelector("nav");

showMenuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  showMenuBtn.style.display = "none";

  closeMenuBtn.style.display = "block";
});

closeMenuBtn.addEventListener("click", () => {
  menu.style.display = "none";
  showMenuBtn.style.display = "block";

  closeMenuBtn.style.display = "none";
});
