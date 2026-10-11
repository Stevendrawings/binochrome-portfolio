const parent_menu = document.querySelector('.parent_pivot_menu');
const sectionScroller = document.querySelectorAll(".content-scroller")
const ul_spies = document.querySelectorAll('.list_menu')

const activate = function(elem) {
    let valeur = elem.dataset.id
    parent_menu.style.transform = "rotateX(" 
    + valeur + "deg) rotateY(0deg) translateX(-10px) translateY(-60px) translateZ(60px)";
    
    let index = Array.from(elem.parentNode.children).indexOf(elem)
    ul_spies.forEach(el => el.classList.remove('active_menu'))
    console.log(ul_spies[index].classList.add('active_menu'))
}  

const currentCallback = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > 0){
            activate(entry.target)
        }
    })
}

let r = .9
const cut_y = Math.round(window.innerHeight * r)
const options = {
    rootMargin: `-${window.innerHeight - cut_y  - 1}px 0px -${cut_y}px 0px`,
    threshold: 0
};

const observer = new IntersectionObserver(currentCallback, options);

if(sectionScroller.length > 0){
    sectionScroller.forEach(function(spy){
        observer.observe(spy)
    })
}
