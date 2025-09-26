const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

menuToggle.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("active");
  });
});
