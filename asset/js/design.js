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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    
    $('.time').datetimepicker({
        format: 'LT'
    });

    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    $(document).ready(function() {
        // Show the image viewer when an image is clicked
        $('.feed-item img').on('click', function() {
            const imgSrc = $(this).attr('src');
            $('#viewerImage').attr('src', imgSrc).attr('alt', 'Viewing Image');
            $('#imageViewer').fadeIn();
        });
    
        // Close the image viewer
        $('#closeBtn').on('click', function() {
            $('#imageViewer').fadeOut();
        });
    
        // Close viewer when clicking outside the image
        $('#imageViewer').on('click', function(event) {
            if ($(event.target).is('#imageViewer')) {
                $('#imageViewer').fadeOut();
            }
        });
    });
})(jQuery);
