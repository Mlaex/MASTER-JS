const openMenu = document.querySelector('.header-menu-svg')
const menuMobile = document.querySelector('.menu-for-desktop')
const closeMenuMobile = document.querySelector('.icone-close-desktop')

openMenu.addEventListener("click", () => {
    menuMobile.classList.add('active-menu')
})

closeMenuMobile.addEventListener("click", () => {
    menuMobile.classList.remove('active-menu')
})