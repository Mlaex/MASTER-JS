// menu open / close 
const openMenu = document.querySelector('.header-menu-svg')
const menuMobile = document.querySelector('.menu-for-desktop')
const closeMenuMobile = document.querySelector('.icone-close-desktop')
// pop-up
const popupProduct = document.querySelector('.cart-pop-up')
const cartView = document.querySelector('.header-cart-svg')
// cart content
const cartContent = document.querySelector('.cart-pop-up-content-product')


openMenu.addEventListener("click", () => {
    menuMobile.classList.add('active-menu')
})

closeMenuMobile.addEventListener("click", () => {
    menuMobile.classList.remove('active-menu')
})

// click outiste closing menu

window.addEventListener('mouseup', function(event){
	if (event.target != menuMobile && event.target.parentNode != menuMobile || event.target != popupProduct && event.target.parentNode != popupProduct){
        menuMobile.classList.remove('active-menu')
        popupProduct.classList.remove('active-pop-up')
    }
});

// Pop-up product slide in
cartView.addEventListener("click", () => {
    popupProduct.classList.add('active-pop-up')
})

// ajout de la classe en fonction de la longueur du cart

console.log(cartContent.childElementCount)

if(cartContent.childElementCount > 2){
    cartContent.classList.add('moreproduct')
}else{
    cartContent.classList.remove('moreproduct')
}