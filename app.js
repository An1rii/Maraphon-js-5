"use strict"
function slidesPlugin(activePlugin) {
    const slides = document.querySelectorAll('.slide');

    slides[activePlugin].classList.add('active');

    slides.forEach((slide) => {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        });
    });

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
    }
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const a = getRandomNumber(1, 6);
slidesPlugin(a);






// function  slidePlugin(activeSlide = 0){
//     const slides = document.querySelectorAll('.slide');
//
//     slides[activeSlide].classList.add('active')
//     slides.forEach((slide) => {
//         slide.addEventListener('click', () => {
//             clearActiveClasses();
//             slide.classList.add('active');
//         });
//     });
//
//     function clearActiveClasses() {
//         slides.forEach((slide) => {
//             slide.classList.remove('active');
//         });
//     }
// }
// slidePlugin(3)