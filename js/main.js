const hamBurger = document.querySelector(".hamBurger")
const lists = document.querySelector(".collapse");

hamBurger.addEventListener("click", function () {
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

//navigation bar scroll function after hero section
var $nav = $(".navStyle");
var $hero = $(".heroSection");
$(function () {

    'use strict';

    $(document).scroll(function () {
        $nav.toggleClass('scrolled', $(this).scrollTop() > $hero.height());
    });
});

$(document).ready(function () {
    if ($(this).scrollTop() > $hero.height()) {
        $nav.toggleClass("scrolled");
    }
});

//navigation bar scroll inside hero section
$(function () {
    $(document).scroll(function () {
        $nav.toggleClass('scrollInside', $(this).scrollTop() < $hero.height() && $(this).scrollTop() > $nav.height());
    });
});
$(document).ready(function () {
    if (($(this).scrollTop() < $hero.height()) && ($(this).scrollTop() > $nav.height())) {
        $nav.toggleClass("scrollInside");
    }
});

//nav-items click and scroll
$(".nav-proximoMeet").click(function () {
    $('html,body').animate({
        scrollTop: $("#nxt-meetup").offset().top
    },
        'slow');
});
$(".nav-quemSomos").click(function () {
    $('html,body').animate({
        scrollTop: $(".quemSomos").offset().top
    },
        'slow');
});
$(".nav-testemunhos").click(function () {
    $('html,body').animate({
        scrollTop: $(".testimonialsSection").offset().top
    },
        'slow');
});
$(".nav-meetups").click(function () {
    $('html,body').animate({
        scrollTop: $(".meetupsSection").offset().top
    },
        'slow');
});
$(".nav-junta-te").click(function () {
    $('html,body').animate({
        scrollTop: $("#").offset().top
    },
        'slow');
});

//url it's here to have all the events, inside an object!

let APImethod = () => {
    const access_token = "EAAUOkpBroAwBAL33yCedxxMMfUOZCTWUxWK1W01dP7MjmKum8zRJ36ip3yLqU3G7tyHEuWzA9R9Nfkg6z4AmypZBaUbgPUAooZACBhbMfZB3vximqZBSeRVtRK2wHGdLidhqFrdTkgxJEoEi0V5A80ec7XTJDmCsZD";
    const url = `https://graph.facebook.com/v3.0/freeCodeCampLisbon/events?access_token=${access_token}`;

    return fetch(url).then((res) => {
        res.json().then(json => {
            let data = json;
            console.log(data);
        })
    })
}

APImethod();