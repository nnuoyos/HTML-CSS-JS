/* 
셀렉터와 html 구조상의 관계를 통해 접근하기

$('셀렉터').parent() -> 부모요소로 접근하기
$('셀렉터').parents() -> 상위요소로 접근하기
$('셀렉터').siblings() -> 형제요소로 접근하기
$('셀렉터').children() -> 자식요소로 접근하기
$('셀렉터').find() -> 자손요소로 접근하기
*/

$('.gnb .main').click(function () {
    let d = $(this).siblings('.sub').css('display');
    if (d == 'block') {
        return false;
    }
    $('.gnb .sub').slideUp();
    $(this).siblings('.sub').slideDown();
    $('.gnb .main').removeClass('on');
    $(this).addClass('on');
    return false; //한번 실행시킨 후 종료되도록 하기
});
