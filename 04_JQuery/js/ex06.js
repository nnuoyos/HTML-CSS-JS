//위에서 내려오기
$('.btnT').click(function () {
    $('.sideT').animate({
        top: 0,
    });
});

$('.sideT > .close').click(function () {
    $('.sideT').animate({
        top: '-100%',
    });
});
/* 
.close만 선택할 경우 어느 side의 close버튼인지 모름 따라서 sideT의 close라고 입력해야함
*/

//밑에서 올라오기

$('.btnB').click(function () {
    $('.sideB').animate({
        bottom: 0,
    });
});

$('.sideB > .close').click(function () {
    $('.sideB').animate({
        bottom: '-100%',
    });
});

//왼쪽에서 나타나기
$('.btnL').click(function () {
    $('.sideL').animate({
        left: 0,
    });
});

$('.sideL > .close').click(function () {
    $('.sideL').animate({
        left: '-100%',
    });
});

//오른쪽에서 나타나기
$('.btnR').click(function () {
    $('.sideR').animate({
        right: 0,
    });
});

$('.sideR > .close').click(function () {
    $('.sideR').animate({
        right: '-100%',
    });
});
