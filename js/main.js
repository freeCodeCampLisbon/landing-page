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

