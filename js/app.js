const parent_menu = document.querySelector('.parent_pivot_menu');
const sectionScroller = document.querySelectorAll(".container")
const ul_spies = document.querySelectorAll('.list_menu')
const dataId = document.querySelectorAll('[data-id]')

let index = 0;

const activate = function(elem) {
    console.log(elem)
    index += 1
    if(index > 3){ index = 0 } 
    console.log(Math.abs(index - 1))
};

let valeur = 0;
parent_menu.style.transform = "rotateX(" 
+ valeur + "deg) rotateY(360deg) translateX(-10px) translateY(-65px) translateZ(60px)";
      
const callback = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > 0){
            activate(entry.target)
        }
    })
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

const observer = new IntersectionObserver(callback, options);

if(sectionScroller.length > 0){
    const observer = new IntersectionObserver(callback, {})
    sectionScroller.forEach(function(spy){
        observer.observe(spy)
    })
}