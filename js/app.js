const parent_menu = document.querySelector('.parent_pivot_menu');
const sectionScroller = document.querySelectorAll(".container")
const ul_spies = document.querySelectorAll('.list_menu')
const header = document.querySelector('[data-header]')

let direction = 'up'
let prevYPosition = 0

const activate = function(elem) {
let valeur = Math.abs(parseFloat(elem.dataset.id))
parent_menu.style.transform = "rotateX(" 
+ valeur + "deg) rotateY(0deg) translateX(-10px) translateY(-65px) translateZ(60px)";
    console.log(elem.getAttribute("data-id"))
}

const callback = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > 0){
            activate(entry.target)
        }
    })
}

let ratio = .9
const y = Math.round(window.innerHeight * ratio)
const options = {
    rootMargin: `-${window.innerHeight - y - 1}px 0px -${y}px 0px`,
    threshold: 0
};

const observer = new IntersectionObserver(callback, options);

if(sectionScroller.length > 0){
    sectionScroller.forEach(function(spy){
        observer.observe(spy)
    })
}
