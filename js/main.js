const openMenuBtn = document.getElementById("open-menu-btn");
const modalWrapper = document.getElementById("modal-wrapper");
const modalMenu = document.getElementById("modal-menu");
const closeMenuBtn = document.getElementById("close-menu-btn");
const modalLinks = document.querySelectorAll(".modal-menu-links");

openMenuBtn.addEventListener("click", function () {
  modalWrapper.classList.add("is-open");
  modalMenu.classList.add("menu-move");
});

closeMenuBtn.addEventListener("click", function () {
  modalWrapper.classList.remove("is-open");
  modalMenu.classList.remove("menu-move");
});

modalLinks.forEach((link) => {
  link.addEventListener("click", function () {
    modalMenu.classList.remove("is-open");
  });
});
