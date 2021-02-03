// (function($) {
//     "use strict";

//     $('body').scrollspy({
//         target: '.navbar-fixed-top',
//         offset: 60
//     });

//     $('#topNav').affix({
//         offset: {
//             top: 200
//         }
//     });

//     new WOW().init();

//     $('a.page-scroll').bind('click', function(event) {
//         var $ele = $(this);
//         $('html, body').stop().animate({
//             scrollTop: ($($ele.attr('href')).offset().top - 60)
//         }, 1450, 'easeInOutExpo');
//         event.preventDefault();
//     });

//     $('.navbar-collapse ul li a').click(function() {
//         /* always close responsive nav after click */
//         $('.navbar-toggle:visible').click();
//     });

//     $('#galleryModal').on('show.bs.modal', function (e) {
//        $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
//     });

// })(jQuery);

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});