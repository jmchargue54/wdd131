document.querySelector('#year').textContent = new Date().getFullYear();

const menuButton = document.querySelector("button");
const menu = document.querySelector(".menu");

function toggleMenu() {
    menu.classList.toggle("show-menu");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth >= 1000) {
        menu.classList.add("show-menu");
    } else if (window.innerWidth >=700) {
        menu.classList.add("show-menu");
    } else {
        menu.classList.remove("show-menu");
    }
}

handleResize();
window.addEventListener("resize", handleResize);