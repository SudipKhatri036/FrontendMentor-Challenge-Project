const HamBtn = document.getElementById("nav-bar-btn");
const showNav = document.querySelector(".show-navbar");
const offBtn = document.getElementById("cross");
console.log(offBtn);
HamBtn.addEventListener("click", function () {
  showNav.style.display = "block";
  HamBtn.style.display = "none";
});
offBtn.addEventListener("click", function () {
  showNav.style.display = "none";
  HamBtn.style.display = "block";
});
