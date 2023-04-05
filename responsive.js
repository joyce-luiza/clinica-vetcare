const hamburger = document.querySelector(".hamburger")
const navLinks = document.querySelector(".navbar-links-container")
const mobileMenu = document.querySelector(".mobile-menu")
const closeButton = document.querySelector(".close")



closeButton.addEventListener("click", hideMenu)
hamburger.addEventListener("click", showMenu)
window.addEventListener("resize", showHamburger)
document.addEventListener('scroll', blockScrolling)

function showHamburger() {
    if(window.screen.width<=1080){
        hamburger.style.display = "block"
        navLinks.style.display = "none"

        hamburger.addEventListener("click" ,showMenu)
    }else{
        hamburger.style.display = "none"
        navLinks.style.display = "flex"
    }
}

function hideMenu(){
    mobileMenu.style.display = "none"
}

function showMenu(){
    mobileMenu.style.display = "block"
}

function blockScrolling(){
    if(mobileMenu.style.display=="block"){
        window.scroll(0, 0)
    };
}

showHamburger()
