const btnMenu = document.getElementById("btn-menu");
const navMenu = document.querySelector("header nav");

console.log(btnMenu);

btnMenu.addEventListener("click", ()=>{
    // console.log("click")
    navMenu.classList.add("nav-visible");
    } 
)