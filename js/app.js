const wrapper = document.querySelector('.wrapper');
const menu1 = ["accueil", "illustration", "photographie", "graphisme", "contact"].reverse();
const menu2 = ["accueil", "facebook", "instagram", "pinterest", "linkedin", "behance"].reverse();
const menu3 = ["accueil", "blog", "service", "team", "contact"].reverse();

let count_degMax = 300;

const parent_menu = document.createElement("div")
parent_menu.classList.add("parent_pivot_menu")

const tab_menus = [menu1, menu2, menu3];
let copie_tab = [...tab_menus]

copie_tab.forEach((val) => {
    let ul = document.createElement('ul');
    ul.classList.add("list_menu");

    wrapper.appendChild(parent_menu)
    parent_menu.appendChild(ul)
    for(let i = 0; i < val.length; i = i + 1){
        let li = document.createElement('li');
        ul.appendChild(li) 
        li.classList.add('item-div');
        const monLien = document.createElement('a');
        monLien.href = "file:///C:/Users/steve/Desktop/binochrome/index.html"
        li.appendChild(monLien)
        monLien.textContent = val[i]; 
    }
});

const deg_ul_1 = document.querySelector('.list_menu:nth-child(1)')
.classList.add("deg_ul_1")
const deg_ul_2 = document.querySelector('.list_menu:nth-child(2)')
.classList.add("deg_ul_2")
const deg_ul_3 = document.querySelector('.list_menu:nth-child(3)')
.classList.add("deg_ul_3")

// lorsque le menu est active il faudra mettre un effet
// box-shadow: inset 20px 0px 100px 25px black;

const sectionScroller = document.querySelectorAll(".spies")
const ul_spies = document.querySelector('.list_menu')
parent_menu.style.transform = "rotateX(" + 300 + "deg)" 
+ "rotateY(0deg) translateX(-10px) translateY(-110px) translateZ(30px)"

const activate = function(elem){
    const idBox = elem.getAttribute('id')
    if(ul_spies === null){
        return null;
    }

    // parent_menu.style.transform = "rotateX(" + (300) + "deg)" 
    // + "rotateY(0deg) translateX(-10px) translateY(-110px) translateZ(30px)"
    ul_spies.classList.add('active_menu')

}

const callback = function(entries, obeserver){
    entries.forEach(function (entry){
        if(entry.intersectionRatio > 0){
            //console.log(entry)
            activate(entry.target)
        }
    })
}

if(sectionScroller.length > 0 ){
    const observer = new IntersectionObserver(callback, {})
    sectionScroller.forEach(function(scrollSpies) {
        observer.observe(scrollSpies)
    })
}

let count = 120;
 if((count + count_degMax) >= 300){
    count = 60;
    console.log("la valeur repart à " + count)
 } else {
    console.log("la valeur est moins grande")
 }

// const tabs = sectionScoller;
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//         console.log(entry.target)
//         }
//     })
// }, {})

// tabs.forEach(el => observer.observe(el))

// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log('L’élément est visible !', entry.target);
//     }
//   });
// };

// const options = {
//   root: null,          // Utilise le viewport (la fenêtre du navigateur) par défaut
//   rootMargin: '100px',   // Pas de marge autour de la racine
//   threshold: 1       // Se déclenche quand 50% de l'élément est visible
// };

// const observer = new IntersectionObserver(callback, options);

// Ciblez et observez un élément du DOM
// observer.observe(document.querySelector("section"));



