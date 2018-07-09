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

$(".heroButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".joinUsSection").offset().top},
        'slow');
});

$(".nav-proximoMeet").click(function () {
    $('html,body').animate({
        scrollTop: $("#nxt-meetup").offset().top
    },
        'slow');
});
$(".nav-quemSomos").click(function () {
    $('html,body').animate({
        scrollTop: $(".quemSomosSection").offset().top
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
$(".nav-juntaTe").click(function () {
    $('html,body').animate({
        scrollTop: $(".joinUsSection").offset().top
    },
        'slow');
});

//url it's here to have all the events, inside an object!

let APImethod = () => {
    const access_token = "EAAUOkpBroAwBAL33yCedxxMMfUOZCTWUxWK1W01dP7MjmKum8zRJ36ip3yLqU3G7tyHEuWzA9R9Nfkg6z4AmypZBaUbgPUAooZACBhbMfZB3vximqZBSeRVtRK2wHGdLidhqFrdTkgxJEoEi0V5A80ec7XTJDmCsZD";
    const url = `https://graph.facebook.com/v3.0/freeCodeCampLisbon/events?access_token=${access_token}&fields=description,end_time,name,place,start_time,id,cover`;

    return fetch(url).then((res) => {
        res.json().then(json => {
            let data = json;

            // ********** NEXT MEETUP ********** //
            // Model
            let meetups = {
                data: json.data,
                months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
            };

            // Controler
            let nxtMeetupControler = {
                init: function() {
                	nxtMeetupView.init();
                },
                showImage: function(element){
                    let meetupImage = this.getNxtMeetupData();
                    element.src = meetupImage[0].cover.source;
                },
                showTitle: function(element) {
                	let meetupTitle = this.getNxtMeetupData();
                	element.innerHTML = meetupTitle[0].name;
                },
                showPlace: function(element) {
                	let meetupPlace = this.getNxtMeetupData();
                	element.innerHTML = meetupPlace[0].place.name + ', Lisbon';
                },
                showImgDate: function(element, element2) {
                	let meetupPlace = this.getNxtMeetupData();
                	let date = new Date(meetupPlace[0].start_time).toDateString();
                	element.innerHTML = date;
                	element2.innerText = date;
                },
                getNxtMeetupData: function() {
                	return meetups.data;
                }
            };

            // View
            let nxtMeetupView = {
                init: function() {
                    this.showImage();
                    this.showTitle();
                    this.showPlace();
                    this.showImgDate();
                },
                showImage: function(){
                    let meetupImage = document.querySelector('#nxt-meetup .nxt-meetup-img img');
                    nxtMeetupControler.showImage(meetupImage);
                },
                showTitle: function() {
                    let meetupTitle = document.querySelector('#nxt-meetup-number');
                    nxtMeetupControler.showTitle(meetupTitle);
                },
                showPlace: function() {
                	let place = document.querySelector('#nxt-meetup-location');
                	nxtMeetupControler.showPlace(place);
                },
                showImgDate: function() {
                	let onImageDate = document.querySelector('#onimage-date');
                	let onInfoDate = document.querySelector('#nxt-meetup-date');
                	nxtMeetupControler.showImgDate(onImageDate, onInfoDate);
                }
            };

            let pastEventController = {
                init: () => {
                    let html = "",
                    that = this,
                    $el = document.querySelector('section.meetupsSection .meetupsSection--list'),
                    arr = meetups.data;
                    arr.slice(1).map((item, i) => {
                        let date = new Date(item.start_time);
                        if(i < 4){
                            html += 
                            `<a class="col-12 col-sm-6 meetupsSection--list__item pb-0 ${(!(i & 1)) ? 'pr-0' : ''}" href="https://www.facebook.com/events/${item.id}/" target="_blank">
                                <figure class="meetupsSection--list__item--background">
                                    <img class="meetupsSection--list__item--image img-responsive" src="${item.cover.source}" alt="reunião dos membros do freeCodeCamp" >
                                    <figcaption>Lisboa - ${date.getDate() + ' ' + meetups.months[date.getMonth()] + ' ' + date.getFullYear() }</figcaption>  
                                </figure>
                            </a>
                            `;
                        }
                    });
                    $el.innerHTML += html;
                },
                html: (data) => {
                    return;
                }
            };

            nxtMeetupControler.init();
            pastEventController.init();

        });
    })
}

APImethod();
