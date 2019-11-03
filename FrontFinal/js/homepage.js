$(document).ready(function () {
    sweetalert();
    $('.owl-carousel').owlCarousel({

        dots: false,
        loop: true,
        margin: 30,
        mouseDrag: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
            }
        }
    })

})
