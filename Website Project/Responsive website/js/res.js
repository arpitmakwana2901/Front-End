// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function(){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("scroll-on")
//     }else{
//         nav.classList.remove("scroll-on")
//     }
// }
document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
        document.querySelector(".navbar-collapse").classList.add("show");
    }
});
