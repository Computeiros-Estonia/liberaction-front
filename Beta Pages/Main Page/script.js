let time = 5000;
let currentImageIndex = 0;
let images = document.querySelectorAll(".banner img");
let max = images.length;
const mobileMenu = document.querySelector('.mobile-menu');
const banner = document.querySelector('.banner');
const content = document.querySelector('.content');




function toggleMenu() {
    const menuContainer = document.querySelector('.menu-container');
    menuContainer.classList.toggle('active')
    banner.classList.toggle('inactive')
    content.classList.toggle('active')

}

function nextImage() {
    
    images[currentImageIndex].classList.remove("selected")
    
    currentImageIndex++
    
    if(currentImageIndex >= max) {
        currentImageIndex = 0
    }
    images[currentImageIndex].classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
    
}


window.addEventListener("load", start)
mobileMenu.addEventListener('click', toggleMenu)


