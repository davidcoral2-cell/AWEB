const btnMenu = document.getElementById("btn-menu");
const navMenu = document.querySelector("header nav");
const cerrar = document.querySelector("header nav img");

console.log(btnMenu);

btnMenu.addEventListener("click", ()=>{
    // console.log("click")
    navMenu.classList.add("nav-visible");
    } 
)

cerrar.addEventListener("click", ()=>{
    navMenu.classList.remove("nav-visible");
})