let menu = document.querySelector('.menu');
let item_menu = document.querySelector('#menu');
let menuSlide = document.getElementById('menu-slide');
let menuImages = document.querySelector('#menu-images');
let mainImage = document.querySelector('#main-image');

console.log(mainImage.getAttribute('src'));

let compteur = 0;
menu.addEventListener('click',openMenu);

menuImages.childNodes.forEach(e=>{
    e.addEventListener('click',changeImage)
});


function openMenu(event) {
        compteur++;
        
        if(compteur%2 !=0) {
            item_menu.removeAttribute('class');
            item_menu.setAttribute('class','menu-close');
            menuSlide.style.width = "40%";
        }else{
            item_menu.removeAttribute('class');
            item_menu.setAttribute('class','menu-icon');
            menuSlide.style.width = 0;  
        }
}

function changeImage(event){
    let newImage = event.originalTarget.attributes['src'].value;
    mainImage.removeAttribute('src');
    mainImage.setAttribute('src',newImage);
    
}

