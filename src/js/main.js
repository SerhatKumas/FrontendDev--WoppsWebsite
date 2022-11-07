
$(document).ready(function () {
    /* ===================================
     Loading Timeout
     ====================================== */

    setTimeout(function () {
        $("#loader").fadeOut("slow");
    }, 3000);

});

jQuery(function ($) {

    "use strict";
//check for browser os
    var isMobile = false;
    var isiPhoneiPad = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        isiPhoneiPad = true;
    }

    /* ===================================
    Portfolio Filter
    ====================================== */

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({filter: filterValue});

    });

    $('.filtering').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    setTimeout(function (){
        $('.filtering .active').click();
    }, 4500);

    /* ===================================
    Demo Filter
    ====================================== */

    // isotope
    $('.gallery-demo').isotope({
        // options
        itemSelector: '.demo-item'
    });

    var $galleryt = $('.gallery-demo').isotope({
        // options
    });

    // filter items on button click
    $('.filtering-demo').on('click', 'span', function () {

        var filterValue = $(this).attr('data-filter');

        $galleryt.isotope({filter: filterValue});

    });

    $('.filtering-demo').on('click', 'span', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });


    /* ===================================
     Animated Counter
     ====================================== */


    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });


    /* ===================================
     Animated Progress Bar
     ====================================== */

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 2000)
        });
    });


    /* ===================================
     Header Appear On Scroll
     ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) { // Set position from top to add class
            $('header').addClass('sticky header-appear');
            $('.left-logo .navbar-brand').addClass("display_none");
        }
        else {
            $('header').removeClass('sticky header-appear');
            $('.left-logo .navbar-brand').removeClass("display_none");
        }
    });

        // fixing bottom nav to top on scrolliing
    var $fixednav = $(".bottom-nav .navbar-fixed-top");
    $(window).on("scroll", function () {
        var $heightcalc = $(window).height() - $fixednav.height();
        if ($(this).scrollTop() > $heightcalc) {
            $fixednav.addClass("navbar-bottom-top");
        } else {
            $fixednav.removeClass("navbar-bottom-top");
        }
    });

    /* =====================================
              Side Nav Absolute
       ====================================== */

    if ($("body").hasClass("side-nav")) {
        var $menuLeft = $(".pushmenu-left");
        var $menuRight = $(".pushmenu-right");
        var $toggleleft = $(".menu_bars.left");
        var $toggleright = $(".menu_bars.right");
        $toggleright.on("click", function () {
            $('.menu_bars').toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return false;
        });

        $('.push_nav li a').on('click', function () {
            $toggleright.toggleClass("active");
            $menuRight.toggleClass("pushmenu-open");
            $("body").toggleClass("pushmenu-push-toLeft");
            $(".navbar").toggleClass("navbar-right_open");
            return true;
        });
    }

    /* =====================================
            Parallax
     ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset:0,
        });
    }

    /* =====================================
            Scroll
     ====================================== */

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 150)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    //scroll sections
    $(".scroll").on('click', function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 750);
    });



    /* =====================================
            Wow
     ====================================== */

    if ($(window).width() > 767) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


    /*==============================================================
            magnificPopup Start
    ==============================================================*/

    $('.header-search-form').magnificPopup({
        mainClass: 'mfp-fade',
        closeOnBgClick: true,
        preloader: false,
        // for white background
        fixedContentPos: false,
        closeBtnInside: false,
        callbacks: {
            open: function () {
                setTimeout(function () {
                    $('.search-input').focus();
                }, 500);
                $('.filtering-demo .active').click();
                $('#search-header').parent().addClass('search-popup');
                if (!isMobile) {
                    $('body').addClass('overflow-hidden');
                    //$('body').addClass('position-fixed');
                    $('body').addClass('width-100');
                } else {
                    $('body, html').on('touchmove', function (e) {
                        e.preventDefault();
                    });
                }
            },
            close: function () {
                if (!isMobile) {
                    $('body').removeClass('overflow-hidden');
                    //$('body').removeClass('position-fixed');
                    $('body').removeClass('width-100');
                } else {
                    $('body, html').unbind('touchmove');
                }
            }
        }
    });

    /*==============================================================
                Swiper Slider
      ==============================================================*/

    var aboutslider = new Swiper('.swiper-container', {
        centeredSlides: true,
        grabCursor: true,
        spaceBetween: 10,
        loop: true,
        slidesPerView: 3,
        effect: 'coverflow',
        coverflow: {
            rotate: 0,
            stretch: 90,
            depth: 200,
            modifier: 1,
        },
        // comment the following lines out to see how it should be!
        breakpoints: {
            800: {
                slidesPerView: 1.5
            }
        }

    });


    /*==============================================================
                Team Flip
      ==============================================================*/

    $(function () {
        $(".flip").flip({
            trigger: 'hover',
            axis: 'x'
        });
    });


    /*==============================================================
                Rotating Text
      ==============================================================*/

    $("#js-rotating").Morphext({
        // The [in] animation type. Refer to Animate.css for a list of available animations.
        animation: "flipInX",
        // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
        separator: ",",
        // The delay between the changing of each phrase in milliseconds.
        speed: 3000,
        complete: function () {
            // Called after the entrance animation is executed.
        }
    });

    /*==============================================================
                Owl Carousel
      ==============================================================*/

    var owl1 = $('.owl-work');
    owl1.owlCarousel({
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            767: {
                items: 2,

            },
            1000: {
                items: 3,
            }
        }
    });

    var owl2 = $('.owl-work-two');
    owl2.owlCarousel({
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            767: {
                items: 2,

            },
            1000: {
                items: 2,
            }
        }
    });

    var owl3 = $('.owl-testimonials');
    owl3.owlCarousel({
        loop: true,
        dots: false,
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"]
    });


    var owl4 = $('.owl-testimonial-two');
    owl4.owlCarousel({
        loop: true,
        margin: 0,
        navSpeed: 500,
        items: 1,
        nav: true,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                nav: false,
                mouseDrag: true,
                autoplay: false,
                animate: false,
            },
            767: {
                nav: true,
                mouseDrag: false
            }
        }
    });


    var owl5 = $('.owl-client');
    owl5.owlCarousel({
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,

            },
            767: {
                items: 3,

            },
            1000: {
                items: 5,
            }
        }
    });

    var owl6 = $('.owl-blog-item');
    owl6.owlCarousel({
        loop: true,
        dots: false,
        items: 1,
        nav: true,
        navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
    });

    var owl7 = $('.owl-text-slider');
    owl7.owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 1,
        smartSpeed: 450
    });


    /*==============================================================
            Slider Revolution
      ==============================================================*/

    $("#rev_slider_5_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "//localhost:82/revslider/revslider/public/assets/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {},
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            speedbg: 0,
            speedls: 0,
            levels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 55],
            disable_onmobile: "on"
        },
        shadow: 0,
        spinner: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        fullScreenOffset: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            disableFocusListener: false,
        }
    });


    $("#rev_slider_1078_1").show().revolution({
        sliderType: "standard",
        jsFileLocation: "revolution/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            keyboardNavigation: "on",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            mouseScrollReverse: "default",
            onHoverStop: "off",
            touch: {
                touchenabled: "on",
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: "horizontal",
                drag_block_vertical: false
            },
            arrows: {
                style: "zeus",
                enable: true,
                hide_onmobile: true,
                hide_under: 600,
                hide_onleave: true,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                hide_onmobile: false,
                hide_under: 300,
                style: "hermes",
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                h_offset: 0,
                v_offset: 30,
                space: 8,
                tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
            }
        },
        viewPort: {
            enable: true,
            outof: "pause",
            visible_area: "80%",
            presize: false
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [600, 600, 500, 400],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 2000,
            levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55]
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
        }
    });

    $("#rev_slider_2_2").show().revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
            onHoverStop: "off"
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [600, 600, 500, 400],
        lazyType: "none",
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            nextSlideOnWindowFocus: "off",
            disableFocusListener: false
        }
    });

});