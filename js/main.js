(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });


})(jQuery);



let form = document.getElementById('sheetdb-form')

// Get the modal
var modal = document.getElementById("myModal");
var gname = document.getElementById("gname");
var gmail = document.getElementById("gmail");
var coursename = document.getElementById("cname");
var phone = document.getElementById("phone");
var message = document.getElementById("message");
var span = document.getElementsByClassName("close")[0];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('sheetdb-form'))
    }).then(
        Response => Response.json()
    )
        .then((html) => {
            modal.style.display = "block";
            span.onclick = function () {
                modal.style.display = "none";
      
            }

        })
        gname.value = ''
        gmail.value = ''
        coursename.value = ''
        phone.value = ''
        message.value = ''
})



// https://codepen.io/vikram_e22/pen/BQNaBB
