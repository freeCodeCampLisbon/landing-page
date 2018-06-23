const hamBurger = document.querySelector(".hamBurger")
const lists = document.querySelector(".collapse");

hamBurger.addEventListener("click", function(){
    burgerFunction();
}) 

function burgerFunction() {
    if (lists.style.display === "block") {
        lists.style.display = "none";
    } else {
        lists.style.display = "block";
        lists.style.textAlign = "right";
    }
}

//navigation bar scroll function
var $nav = $(".navStyle");
var $hero = $(".heroSection");
$(function () {
    $(document).scroll(function (){
        $nav.toggleClass('scrolled', $(this).scrollTop() > $hero.height());
    });
  });

 $(document).ready(function() {
    if($(this).scrollTop() > $hero.height()){
        $nav.toggleClass("scrolled");
    }
});