const wrapper = document.querySelector('.wrapper');
const menu1 = ["index", "apropos", "service", "team", "contact"];
const menu2 = ["index", "blog", "service", "team", "contact"];
const menu3 = ["index", "facebook", "instagram", "pinterest", "Linkedin", "contact"];

let counter_deg = 60;

const parent_menu = document.createElement("div")
parent_menu.classList.add("parent_menu")

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


// let sectionScoller = document.querySelectorAll("section")

// const tabs = sectionScoller;

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry)=>{
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

// // Ciblez et observez un élément du DOM
// observer.observe(document.querySelector("section"));

