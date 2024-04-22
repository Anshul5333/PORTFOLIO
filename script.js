// let nav=document.querySelector('.navbar');
// window.onscroll = function(){
//     if(document.documentElement.scrollTop >20){
//         nav.classList.add("header-scrolled");
//     }else{
//         nav.classList.remove("header-scrolled");
//     }
// }
let navbar=document.querySelectorAll(".nav-link");
let navtag=document.querySelector('.nav-tag');
let navcollapes=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
a.addEventListener('click',function(){
    navcollapes.classList.remove("show");
})
})
navtag.addEventListener('click',function(){
        navcollapes.classList.remove("show");
    })
   