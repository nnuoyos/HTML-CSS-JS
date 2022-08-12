//애니메이션이 없는 효과
//show() -> 태그의 원래 display 속성으로 돌려준다
//hide() -> display : none; 으로 만들어준다
/* $('.gnb')
    .mouseover(function () {
        $(this).css({
            height: 440,
        });
        $('.gnbBg').show();
    })
    .mouseout(function () {
        $(this).css({
            height: 40,
        });
        $('.gnbBg').hide();
    }); */

//애니메이션 있는 버전
$('.gnb')
    .mouseover(function () {
        $(this).stop().animate({
            height: 440,
        });
        $('.gnbBg').stop().slideDown();
    })
    .mouseout(function () {
        $(this).stop().animate({
            height: 40,
        });
        $('.gnbBg').stop().slideUp;
    });
