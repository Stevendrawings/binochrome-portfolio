const parent_menu = document.querySelector('.parent_pivot_menu');
const sectionScroller = document.querySelectorAll(".container")
const ul_spies = document.querySelector('.list_menu')

let valeur = 0
let counter = 300

    parent_menu.style.transform = "rotateX(" 
   + valeur + "deg) rotateY(360deg) translateX(0px) translateY(-65px) translateZ(60px)"