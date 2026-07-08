
console.log("読み込み成功");

const hamburger = document.querySelector(".hamburger");
const spNav = document.querySelector(".sp-nav");

hamburger.addEventListener("click", function(){

    spNav.classList.toggle("active");

});