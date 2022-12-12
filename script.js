const menu = document.querySelector(".item-container");
const toggle = document.querySelector(".nav-toggle");

toggle.addEventListener("click", () => {
    menu.classList.toggle('slide');
});