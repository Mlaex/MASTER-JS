// menu open / close 
const openMenu = document.querySelector('.header-menu-svg')
const menuMobile = document.querySelector('.menu-for-desktop')
const closeMenuMobile = document.querySelector('.icone-close-desktop')
// pop-up
const popupProduct = document.querySelector('.cart-pop-up')
const cartView = document.querySelector('.header-cart-svg')
// cart content
const cartContent = document.querySelector('.cart-pop-up-content-product')
// images slider
const imagesSlider = document.querySelectorAll('img.other-img-content')
const imagesSliderMain = document.querySelector('.img-main')
// slider previous / next 
const previous = document.querySelector('.previous-slide ')
const next = document.querySelector('.next-slide ')
// get length image tab
const numberOfSlide = imagesSlider.length





next.addEventListener('click', () => { 

    // trouver l'élément qui à la classe .selected
    let tableau = [] 

    let imageSelected = null


    imagesSlider.forEach((imageSlider, index ) => {
        tableau[index] = imageSlider.classList.value
        
        // if (tableau[index].indexOf('img-selected') >= 0 ) {
        //     imageSelected = index
        // }
        
    })

    imageSelected = tableau.findIndex((elementDuTableau) => 

        elementDuTableau.indexOf('img-selected') >= 0
        
    )

    console.log(tableau)
    console.log(imageSelected)

    // imageSelected est l'index qui possède la class selected-img

    // au click de next afficher l'image à l'index suivant

    // au click de next afficher l'image de la miniature suivante

    // TODO test sans chaine de caractères dans le tableau tableau[]






})






























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