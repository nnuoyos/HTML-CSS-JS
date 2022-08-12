/* change button */
$('.box1 .bt11').click(function () {
    $('.box1 p').css({
        height: 100,
        backgroundColor: '#ffcc00',
    });
});

/* reset button */
$('.box1 .bt12').click(function () {
    $('.box1 p').css({
        height: 300,
        backgroundColor: 'aquamarine',
    });
});

/* 
.box2 li를 클릭 할 때,
1. li전체를 비활성화 시킨다 >> active 클래스 삭제 
2. 클릭 한 대상만 활성화 시킨다 >> active 클래스 추가
*/
$('.box2 li').click(function () {
    $('.box2 li').removeClass('active');
    $(this).addClass('active'); //내가 선택한 대상에만 해당하도록
});

$('.box3 a').click(function () {
    $('.box3 p').css({
        backgroundColor: 'blue',
    });
    return false;
    //a태그의 링크는 새로고침이 되기때문에 a태그의 본연의 기능이 사라지게 만들어놓는다
});

let x = 0;
let y = 0;

$('.box4').mouseover(function () {
    $('.count01').text(++x);
});

$('.box5').mouseenter(function () {
    $('.count02').text(++y);
});
