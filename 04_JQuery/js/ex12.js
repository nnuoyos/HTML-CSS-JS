$('.msImg').slick({
    prevArrow: '.mainSlide .msPrev',
    nextArrow: '.mainSlide .msNext',
    dots: true,
    appendDots: '.mainSlide .msPager',
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 1000,
    fade: true,
});

$('.mainSlide .msPause').click(function () {
    $('.msImg').slick('slickPause');
    $(this).hide();
    $('.mainSlide .msPlay').show();
});

$('.mainSlide .msPlay').click(function () {
    $('.msImg').slick('slickPlay');
    $(this).hide();
    $('.mainSlide .msPause').show();
});
