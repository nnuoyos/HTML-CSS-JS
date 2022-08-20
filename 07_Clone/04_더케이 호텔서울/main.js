const toggleBtn = document.querySelector('.navbar_toggle_button');
const menu = document.querySelector('.navbar_menu');
const language = document.querySelector('.navbar_language');
const menuBox = document.querySelector('.menu_box');
/* header 상단 toggle button */
toggleBtn.addEventListener('click', () => {
    menuBox.classList.toggle('active');
    menu.classList.toggle('active');
    language.classList.toggle('active');
    event.currentTarget.classList.toggle('active-1');
});


/* slide */
$(function(){
    let container = $('.slide_box');
    let pagination = $('.slide_pagination > li');
    let nowIndex = 0;

    pagination.click(function(e){
        e.preventDefault(); //기본속성 막기
        nowIndex = pagination.index(this); //현재페이지 첫번째
        pagination.eq(nowIndex).parent().addClass('active');
        pagination.eq(nowIndex).parent().siblings().removeClass('active');
        container.animate({left:-310*nowIndex});
    });
});

$(function(){
    let container_02 = $('.slide_box_main03');
    let pagination_02 = $('.pagination03 > li');
    let nowIndex_02 = 0;

    pagination_02.click(function(e){
        e.preventDefault(); //기본속성 막기
        nowIndex_02 = pagination_02.index(this); //현재페이지 첫번째
        pagination_02.eq(nowIndex_02).parent().addClass('active');
        pagination_02.eq(nowIndex_02).parent().siblings().removeClass('active');
        container_02.animate({left:-310*nowIndex_02});
    });
});


/* tab menu */
$(function () {
    let tabAnchor = $('.tabs_nav li a');
    let tabPanel = $('.tabs_panel');

    //링크를 클릭하면 할 일
    tabAnchor.click(function(e){
        e.preventDefault(); //링크의 기본 속성 막아놓기
        //내가 클릭한 탭에만 active 부여하기
        tabAnchor.removeClass('active'); //액티브 모두 제거
        $(this).addClass('active'); //클릭이벤트가 발생한 그 요소에만 액티브 추가

        tabPanel.hide();
        //tab 01 클릭하면 $('#tab01').show();
        /* 어트리뷰트 불러오기 */
        //let c = A.attr('href'); c라는 변수에 a링크 가져오기
        let $target = $(this).attr('href');
        //console.log($target); 클릭한 탭의 링크값이 콘솔에 찍힌다
        //유저가 보고싶은 해당 탭은 target에 저장되어 있다 show로 보여주기
        $($target).show();
    });
});

