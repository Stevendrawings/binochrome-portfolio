const parent_menu = document.querySelector('.parent_pivot_menu');
const sectionScroller = document.querySelectorAll(".container")
const ul_spies = document.querySelectorAll('.list_menu')

const activate = function(elem) {
parent_menu.style.transform = "rotateX(" 
+ Math.abs(parseFloat(elem.dataset.id))
+ "deg) rotateY(360deg) translateX(-10px) translateY(-65px) translateZ(60px)";
    ul_spies.forEach(el => el.classList.remove('active_menu'))
}

      
const callback = function (entries, observer){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > 0){
            activate(entry.target)
        }
    })
}

const ratio = .20
const y = Math.round(window.innerHeight * ratio)

const options = {
  rootMargin: `0px 0px ${y}px 0px`,
};

const observer = new IntersectionObserver(callback, options);

if(sectionScroller.length > 0){
    const observer = new IntersectionObserver(callback, {})
    sectionScroller.forEach(function(spy){
        observer.observe(spy)
    })
}