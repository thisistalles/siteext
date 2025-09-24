// Seleciona os elementos
const menuToggle = document.getElementById("menu-toggle");
const menuNav = document.getElementById("menu-nav");

// Alterna o menu ao clicar
menuToggle.addEventListener("click", () => {
  menuNav.classList.toggle("active");
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll(".menu-link").forEach(link => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("active");
  });
});
