$(document).ready(function(){

    //cover background class
    var imageSelected = Array.from($('.cover-bg'));
    imageSelected.forEach(function (item) {

        var images  = Array.from($(item).find('img'));
        if(images !== undefined && images !== null && images.length > 0) {

            var image = images[0];
            var thisurl = $(image).attr('src');

            var bgSize = $(image).attr('data-background-size');
            if(bgSize === "" || bgSize === undefined)
                bgSize = "cover";

            var bgPosition = $(image).attr('data-background-position');
            if(bgPosition === "" || bgPosition === undefined)
                bgPosition = "50% 50%";

            var bgRepeat = $(image).attr('data-background-repeat');
            if(bgRepeat === "" || bgRepeat === undefined)
                bgRepeat = "no-repeat";

            $(image).parents('.cover-bg').css({'background-image':'url(' + thisurl + ')', 'background-position': bgPosition, 'background-size': bgSize, 'background-repeat': bgRepeat});
        }

    });


    //All you need to do is call fullPage.js
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['1thPage', '2thPage', '3thPage', '4thPage', '5thPage'],
        navigation: true,
        navigationPosition: 'right',
        //navigationTooltips: ['معرفی پاتوقی', 'قابلیت های پاتوقی', 'اپلیکیشن پاتوقی', 'نظر مشتریان', 'ارتباط با ما'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 100,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: false,
        verticalCentered: true,
        sectionsColor: ['#FFFFFF', '#f3bc65', '#e1eef3', '#28948c', '#5e696d'],
        paddingTop: '0',
        paddingBottom: '0',
        //fixedElements: '#header, .footer',
        responsiveWidth: 991,
        responsiveHeight: 0,
        responsiveSlides: false,
        parallax: false,
        parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: true,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    //Handles the carousel thumbnails
    $('[id^=carousel-selector-]').click( function(){
        var id = this.id.substr(this.id.lastIndexOf("-") + 1);
        var id = parseInt(id);
        $('#carouselMobile').carousel(id);
    });


    //
    // verify digit
    //
    var $verifyDigit = $(".verify-digit");

    $verifyDigit.keyup(function () {
        if (this.value.length == this.maxLength) {
            $(this).next('.verify-digit').focus();
        }
    });

    $verifyDigit.keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
            // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    //
    // Select all links with hashes
    $('.smooth-click')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    //
    //
    //
    $('[data-toggle="popover"]').popover();

    //range Slider


    var $range = $("#priceRange");

    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 200,
        from: 30,
        to: 70,
        postfix: " ریال",
        onStart: function (data) {
            $("#priceFrom").html(data.from);
            $("#priceTo").html(data.to);
        },
        onChange: function (data) {
            $("#priceFrom").html(data.from);
            $("#priceTo").html(data.to);
        },
        onFinish: function (data) {
            $("#priceFrom").html(data.from);
            $("#priceTo").html(data.to);
        },
        onUpdate: function (data) {
            $("#priceFrom").html(data.from);
            $("#priceTo").html(data.to);
        }
    });

    //show mobile phone
    $('.hide-phone').click(function() {
        $(this).find('span').text( $(this).data('last') ).removeClass('text-muted');
    });

    //
    // raty fa - readonly
    //
    $('.read-score').raty({
        readOnly: true,
        halfShow : false,
        starOff : 'la la-lg la-star text-muted',
        starOn  : 'la la-lg la-star text-warning',
        score: function() {
            return $(this).attr('data-score');
        }
    });

    //
    // raty fa - write able
    //
    $('.set-score').raty({
        halfShow : false,
        starOff : 'la la-lg la-star text-muted',
        starOn  : 'la la-lg la-star text-warning',
        score: function() {
            return $(this).attr('data-score');
        }
    });

    //
    // raty fa - write able
    //
    $('.set-score_toggle').raty({
        halfShow : false,
        starOff : 'la la-lg la-star text-muted',
        starOn  : 'la la-lg la-star text-warning',
        score: function() {
            return $(this).attr('data-score');
        },
        click: function(score) {
            if(score < 5) {
                $("#more-option").slideDown("slow");
            }
            else {
                $("#more-option").slideUp("slow");
            }
        },
        hints: ["", "", "", "", ""]
    });

    //
    //slim scroll
    //
    $('.scrollable').each(function(){
        $(this).slimScroll({
            position: 'left',
            height: $(this).attr("data-height"),
            //width: '300px',
            //height: '500px',
            size: '5px',
            color: '#364347',
            alwaysVisible: true,
            distance: '0',
            //start: $('#child_image_element'),
            railVisible: true,
            railColor: '#d6e1e5',
            railOpacity: 0.3,
            wheelStep: 10,
            allowPageScroll: false,
            disableFadeOut: false
        });
    });

    //
    // pause and start media when modal open or close
    //
    // $('#videoModal').on('shown.bs.modal', function () {
    //     $('#current-video')[0].play();
    // });
    $('#videoModal').on('hidden.bs.modal', function (e) {
        // $('#current-video')[0].pause();
        $('#videoModal video').attr("src", $("#videoModal  video").attr("src"));
    });

    $('#mediaModal').on('hide.bs.modal', function () { //Change #myModal with your modal id
        $('audio').each(function(){
            this.pause(); // Stop playing
            this.currentTime = 0; // Reset time
        });
    });


    //
    // file input change btn name
    //
    // $(".custom-file-label").each(function() {
    //     var name = $(this).attr("data-name");
    //     $('head').append("<style>.custom-file-input:lang(en)~.custom-file-label::after {content: '"+ name +"'}</style>");
    // });


    //
    // Adjust windows height
    //
    var navHeight = $( '.sticky-top' ).height();
    if(!!navHeight)
        $('head').append("<style>.fullpage-height {min-height: calc(100vh - "+ navHeight +"px)}</style>");

    //
    // btn loading
    //

    // $('.btn').on('click', function() {
    //     var $this = $(this);
    //     var loadingText = '<i class="la la-circle-o-notch la-spin"></i> loading...';
    //     if ($(this).html() !== loadingText) {
    //         $this.data('original-text', $(this).html());
    //         $this.html(loadingText);
    //     }
    //     setTimeout(function() {
    //         $this.html($this.data('original-text'));
    //     }, 2000);
    // });

    //
    // Show Hide Password
    //

    $(".show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('.show_hide_password input').attr("type") == "text"){
            $('.show_hide_password input').attr('type', 'password');
            $('.show_hide_password i').addClass( "la-eye-slash" );
            $('.show_hide_password i').removeClass( "la-eye" );
        }
        else if($('.show_hide_password input').attr("type") == "password"){
            $('.show_hide_password input').attr('type', 'text');
            $('.show_hide_password i').removeClass( "la-eye-slash" );
            $('.show_hide_password i').addClass( "la-eye" );
        }
    });

});