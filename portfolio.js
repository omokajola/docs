const toggle = document.getElementById("menu-toggles");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", function () {
  links.classList.toggle("show");

  setTimeout("2s");
});
