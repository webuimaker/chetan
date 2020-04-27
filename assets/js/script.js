(function ($) {
    'use strict';


    //Hero Slider
    $('.hero-slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 10000,
        arrows: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
        dots: true,
        customPaging: function (slider, i) {
            //var icon = $(slider.$slides[i]).data('icon');
            var text = $(slider.$slides[i]).data('text');
            return '<a><span>' + text + '</span></a>';
        },
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }]
    });
    $('.hero-slider').slickAnimation();




    // $('.hero-slider').slick({
    //     autoplay: true,
    //     infinite: true,
    //     autoplaySpeed: 10000,
    //     arrows: true,
    //     prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    //     nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
    //     dots: true,
    //     customPaging: function (slider, i) {
    //         var icon = $(slider.$slides[i]).data('icon');
    //         var text = $(slider.$slides[i]).data('text');
    //         return '<a><i class="' + icon + '"></i><span>' + text + '</span></a>';
    //     },
    //     responsive: [{
    //         breakpoint: 576,
    //         settings: {
    //             arrows: false
    //         }
    //     }]
    // });
    // $('.hero-slider').slickAnimation();

    // hero slider without pagination
    $('.hero-slider-2').slick({
        autoplay: true,
        infinite: true,
        arrows: false,
        dots: false
    });
    $('.hero-slider-2').slickAnimation();




    // slick slider
    $('.work-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        autoplay: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // slick slider
    $('.service').slick({
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 0,
        arrows: true,
        autoplay: false,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 401,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // about slider
    $('.about-slider').slick({
        arrows: true,
        autoplay: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
    });
    // about post slider
    $('.post-slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
        nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
    });

    // Accordions
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
    });

    // testimonial slider
    // $('.testimonial-slider').slick({
    //     infinite: false,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     dots: false,
    //     arrows: true,
    //     autoplay: true,
    //     prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'ti-arrow-left\'></i></button>',
    //     nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'ti-arrow-right\'></i></button>'
    // });







    // testimonialNew
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    // filter
    $(document).ready(function () {
        var containerEl = document.querySelector('.filtr-container');
        var filterizd;
        if (containerEl) {
            filterizd = $('.filtr-container').filterizr({});
        }
        //Active changer
        $('.fltr-controls').on('click', function () {
            $('.fltr-controls').removeClass('active');
            $(this).addClass('active');
        });
    });

    $( '.controls.list-inline li' ).on( 'click', function() {
        $( this ).parent().find( 'li.active' ).removeClass( 'active' );
        $( this ).addClass( 'active' );
  });


    // easeInOutExpo Declaration
    jQuery.extend(jQuery.easing, {
        easeInOutExpo: function (x, t, b, c, d) {
            if (t === 0) {
                return b;
            }
            if (t === d) {
                return b + c;
            }
            if ((t /= d / 2) < 1) {
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            }
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    });

    // back to top button
    $('.back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });


      // breakpoint and up
   $(window).resize(function(){
    if ($(window).width() >= 980){

      // when you hover a toggle show its dropdown menu
      $(".navbar .dropdown-toggle").hover(function () {
         $(this).parent().toggleClass("show");
         $(this).parent().find(".dropdown-menu").toggleClass("show");
       });

        // hide the menu when the mouse leaves the dropdown
      $( ".navbar .dropdown-menu" ).mouseleave(function() {
        $(this).removeClass("show");
      });

        // do something here
    }
});



})(jQuery);

