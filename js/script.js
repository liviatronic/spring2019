/* RESPONSIVE NAV */
var dink = 0;

$(document).ready(function ($) {

    $('.icon').click(function () {
        dink++;
        $('nav.sidenav').toggleClass('responsive');
        if (dink % 2 == 1) {
            $(this).html("Close");
        } else {
            $(this).html("Menu");
        }
    });


    /* MAKE ANCHOR LINKS SMOOTHLY SCROLL */

    // $('a').click(function () {
    //     $('html, body').animate({
    //         scrollTop: $($(this).attr('href')).offset().top
    //     }, 500);
    //     return false;
    // });

    /* CALENDAR TOGGLE */

    $('ul.calendar .title').click(function () {
        $(this).closest('li').find('.body').slideToggle('fast');
    });

});