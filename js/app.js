const parent_menu = document.querySelector('.parent_pivot_menu');
const sectionScroller = document.querySelectorAll(".container")
const ul_spies = document.querySelector('.list_menu')

let valeur = 0;

const activate = function(elem){
    [elem].forEach(function (elements){
        parent_menu.style.transform = "rotateX(" 
        + valeur + "deg) rotateY(360deg) translateX(0px) translateY(-65px) translateZ(60px)";
        console.log(ul_spies.classList.add('active_menu'))
        console.log(elements)
    })
}

const callback = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > 0){
            console.log(entry)
            activate(entry.target)
        }
    })
}

const spies = document.querySelectorAll('.container')

if(spies.length > 0){
    const observer = new IntersectionObserver(callback, {})
    spies.forEach(function (spy){
        observer.observe(spy)
    })
}