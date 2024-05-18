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

const viewer = document.querySelector(".viewer");
const closeBtn = document.querySelector(".close-viewer");
const imagePreview = viewer.querySelector("img");

// Add click event listener to each image in the gallery
const images = document.querySelectorAll(".gallery img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    viewer.classList.remove("hidden");
    imagePreview.src = img.src;
    imagePreview.alt = img.alt;
  });
});

// Close the viewer when the close button is clicked
closeBtn.addEventListener("click", () => {
  viewer.classList.add("hidden");
});

// Close the viewer when clicked outside the image
viewer.addEventListener("click", (e) => {
  if (e.target === viewer) {
    viewer.classList.add("hidden");
  }
});