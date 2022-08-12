$('.bt1').click(function () {
    $('.box1 .pan').show(1000);
});
$('.bt2').click(function () {
    $('.box1 .pan').hide(1000);
});
$('.bt3').click(function () {
    $('.box1 .pan').toggle(1000);
});
$('.bt4').click(function () {
    $('.box1 .pan').slideDown(1000);
});
$('.bt5').click(function () {
    $('.box1 .pan').slideUp(1000);
});
$('.bt6').click(function () {
    $('.box1 .pan').slideToggle(1000);
});
$('.bt7').click(function () {
    $('.box1 .pan').fadeIn(1000);
});
$('.bt8').click(function () {
    $('.box1 .pan').fadeOut(1000);
});
$('.bt9').click(function () {
    $('.box1 .pan').fadeToggle(1000);
});
$('.box2 button').click(function () {
    $('.box2 .b21').slideToggle(3000);
    $('.box2 .b22').slideToggle(3000, 'linear');
});
$('.box3 button').click(function () {
    $('.box3 .b31').fadeIn(5000).css({
        backgroundColor: 'skyblue',
    });
    $('.box3 .b32').fadeIn(2000, function () {
        $(this).css({
            backgroundColor: 'skyblue',
        });
    });
});
