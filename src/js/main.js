// var button = document.querySelector('#button');
// var modal = document.querySelector('#modal');
// var close = document.querySelector('#close');

// button.addEventListener('click', function(){
//     modal.classList.add('modal_active');
// });

// close.addEventListener('click', function(){
//     modal.classList.remove('modal_active');
// });

$(document).ready(function(){

    // Napojení knihovny wow.js
    new WOW().init();

    var button = $('#button');
    var modal = $('#modal');
    var close = $('#close');

    button.on('click', function(){
        modal.addClass('modal_active');
    });

    close.on('click', function(){
        modal.removeClass('modal_active');
    });


    // Validace formulářů

    $('#brief-form').validate({
      rules: {
        username:"required",
        phone: {
          required: true,
          minlength: 9,
          phone: true
          
        },
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        username: "Uveďte vaše jméno",
        phone: {
          required: "Potřebujeme váš telefon",
          minlength: jQuery.validator.format("Je potřeba napsat alespoň 9 znaků!")
        },
        email: {
          required: "Potřebujeme váš email",
          email: "Vaše e-mailová adresa musí být ve formátu jmeno@domena.cz"
        }
      }
    });


    // Napojení slideru
    $('.slider').slick({
        slidesToShow: 3,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
});