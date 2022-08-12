//$('.box1').css('background-color', 'blue');
/* 셀렉터를 이용해서 스타일 속성 값 바꾸기 */
$('.box1').css({
    width: '50%',
    height: 300,
    backgroundColor: 'green',
});

/* 
변수 d에 .box2 .p21의 display 속성값을 저장
if조건문- 만약 변수d의 값이 'none' 와 같다면
.box2 .p22에 테두리(5px, 검정)가 적용되고 아니라면 삭제되도록 한다

*/

let d = $('.box2 > .p21').css('display'); /* 변수에 속성값 저장 */

if (d == 'none') {
    $('.box2 > .p22').css({
        border: '5px solid #000',
    });
} else {
    $('.box2 > .p22').css({
        border: '0',
    });
}
