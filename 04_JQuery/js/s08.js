$(window).resize(function () {
    b1BgColor();
});
b1BgColor();
function b1BgColor() {
    let i = $(window).width(); //윈도우의 너비값이 저장됨
    if (i >= 1000) {
        $('.box1').css({
            backgroundColor: 'red',
        });
    } else {
        $('.box1').css({
            backgroundColor: 'blue',
        });
    }
}
