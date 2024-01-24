const menuOpenBtn = document.getElementById("open-menu");
const menuCloseBtn = document.getElementById("close-menu");
const navMenu = document.querySelector(".nav-bar-menu");
const dropDownMenus = document.querySelectorAll(".dropdown-content");
const dropdownBtn1 = document.getElementById("dropdown-link1");
const dropdownBtn2 = document.getElementById("dropdown-link2");
const arrowImg = document.querySelectorAll(".arrow-el");
const imgEl = document.getElementById("main-img");

dropdownBtn1.addEventListener("click", () => {
  dropDownMenus[0].classList.toggle("active");

  if (dropDownMenus[0].classList.contains("active")) {
    arrowImg[0].style.rotate = "180deg";
  } else {
    arrowImg[0].style.rotate = "0deg";
  }
});
dropdownBtn2.addEventListener("click", () => {
  dropDownMenus[1].classList.toggle("active");

  if (dropDownMenus[1].classList.contains("active")) {
    arrowImg[1].style.rotate = "180deg";
  } else {
    arrowImg[1].style.rotate = "0deg";
  }
});

menuOpenBtn.addEventListener("click", () => {
  navMenu.style.display = "block";
  menuCloseBtn.style.display = "block";
  document.getElementById("overlay").style.visibility = "visible";
});

menuCloseBtn.addEventListener("click", () => {
  navMenu.style.display = "none";
  menuCloseBtn.style.display = "none";
  document.getElementById("overlay").style.visibility = "hidden";
});

if (window.innerWidth <= 600)
  imgEl.setAttribute("src", "./images/image-hero-mobile.png");
