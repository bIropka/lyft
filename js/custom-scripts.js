$(window).ready(function () {

    $('.slider').slick({
        autoplay: true
    });

    $('.block-1 .button-blue').click(function() {
        yaCounter44660062.reachGoal('Get_Coupon');
        goog_report_conversion('https://www.lyft.com/invite/MAX8008');
        _gaq.push(['_trackEvent', 'Order', 'view']);
    });

    $('.block-2 .button-blue').click(function() {
        yaCounter44660062.reachGoal('Get_Free_Ride');
        goog_report_conversion('https://www.lyft.com/invite/MAX8008');
        _gaq.push(['_trackEvent', 'Order', 'view']);
    });

});