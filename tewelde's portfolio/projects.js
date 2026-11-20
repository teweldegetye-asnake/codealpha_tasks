const nav = document.querySelector("nav");
const menu = document.querySelector("#menu");
menu.addEventListener("click",function(){
    nav.classList.toggle("show");
});
const image = document.querySelectorAll("img");
image.forEach(images => images.addEventListener("click",function(){
    images.classList.toggle("bigger");
    const imageatt = images.getAttribute("class");
    if(imageatt === "bigger"){
        setTimeout(function(){
        images.classList.remove("bigger");
        },10000);
        
    }
}));