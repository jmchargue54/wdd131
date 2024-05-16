document.querySelector('#year').textContent = new Date().getFullYear()

const menuButton = document.querySelector(".menu-button");
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("hide");
}

element.addEventListener("event", handlerFunction)
menuButton.addEventListener("click", toggleMenu);