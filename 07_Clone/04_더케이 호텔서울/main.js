/* header 상단 toggle button */
//변수 지정
const toggleBtn = document.querySelector('.navbar_toggle_button');
const menu = document.querySelector('.navbar_menu');
const language = document.querySelector('.navbar_language');
const menuBox = document.querySelector('.menu_box');
//토글 버튼 클릭시 일어날 함수
toggleBtn.addEventListener('click', (event) => {
    menuBox.classList.toggle('active');
    menu.classList.toggle('active');
    language.classList.toggle('active');
    event.currentTarget.classList.toggle('active-1');
});

/* main slide*/
//변수 지정
let sliderWrapper = document.querySelector('.container'); //최상위 요소 div
let sliderContainer = document.querySelector('#slide'); //ul
let slides = document.querySelectorAll('.main_slide'); //li
let totalSlides = slides.length; //슬라이드 (li) 개수
let slideIndex = 0;
let sliderWidth = sliderWrapper.clientWidth; //container의 width
sliderContainer.style.width = sliderWidth * totalSlides + 'px';
showSlides(); //페이지 열자마자 움직이고 있게 함수 먼저 부르기

//자동 슬라이드 함수
function showSlides() {
    for (let i = 0; i < totalSlides; i++) {
        sliderContainer.style.left = -(sliderWidth * slideIndex) + 'px';
    }
    slideIndex++;
    if (slideIndex === totalSlides) {
        slideIndex = 0; //현재페이지가 마지막이라면, 다시 첫화면으로 되돌리기
    }
    setTimeout(showSlides, 3500);
}

/* pagination promotion*/
$(function () {
    let container = $('#promotion_ul');
    let pagination = $('#promotion_list > li');
    let pageBtn = $('#promotion_list > li > a');
    let nowIndex = 0;
    //페이징버튼 클릭 시 일어날 함수
    pagination.click(function (e) {
        e.preventDefault(); //기본속성 막기
        nowIndex = pagination.index(this); //현재페이지 첫번째
        pagination.eq(nowIndex).parent().addClass('active'); //클릭한 탭의 상위요소에 액티브 추가
        pagination.eq(nowIndex).parent().siblings().removeClass('active');
        pageBtn.eq(nowIndex).parent().addClass('active'); //페이징 버튼
        pageBtn.eq(nowIndex).parent().siblings().removeClass('active');
        container.animate({ left: -310 * nowIndex });
    });
});
/* pagination package */
$(function () {
    let container = $('#package_ul');
    let pagination = $('#package_list > li');
    let pageBtn = $('#package_list > li > a');
    let nowIndex = 0;
    pagination.click(function (e) {
        e.preventDefault();
        nowIndex = pagination.index(this);
        pagination.eq(nowIndex).parent().addClass('active');
        pagination.eq(nowIndex).parent().siblings().removeClass('active');
        pageBtn.eq(nowIndex).parent().addClass('active');
        pageBtn.eq(nowIndex).parent().siblings().removeClass('active');
        container.animate({ left: -310 * nowIndex });
    });
});

/* tab menu */
//페이지 들어가자마자 첫번째 화면 보이도록 구현 다시 하기
$(function () {
    let tabAnchor = $('.tabs_nav li a');
    let tabPanel = $('.tabs_panel');

    //링크를 클릭하면 할 일
    tabAnchor.click(function (e) {
        e.preventDefault(); //링크의 기본 속성 막아놓기
        //내가 클릭한 탭에만 active 부여하기
        tabAnchor.removeClass('active'); //액티브 모두 제거
        $(this).addClass('active'); //클릭이벤트가 발생한 그 요소에만 액티브 추가
        tabPanel.hide();
        /* 어트리뷰트 불러오기 */
        //let c = A.attr('href'); c라는 변수에 a링크 가져오기
        let $target = $(this).attr('href');

        //유저가 보고싶은 해당 탭은 target에 저장되어 있다 show로 보여주기
        $($target).show();
    });
});

/* LOCATION drop down menu */
//active 추가 되었을 경우에만 list 보이게 하기
function onClickSelect(e) {
    const isActive = e.currentTarget.className.indexOf("active") !== -1;
    if (isActive) {
      e.currentTarget.className = "select";
    } else {
      e.currentTarget.className = "select active";
    }
  }
  
  document.querySelector(".select").addEventListener("click", onClickSelect);
  
  //클릭한 option을 선택창에 띄우기
  function onClickOption(e) {
    const selectedValue = e.currentTarget.innerHTML;
    document.querySelector(".text").innerHTML = selectedValue; //선택한 옵션으로 html에 표기
  }
  //option list 
  let optionList = document.querySelectorAll(".option");
  for (let i = 0; i < optionList.length; i++) {
    let option = optionList[i];
    option.addEventListener("click", onClickOption);
  }
  
  //해당 메뉴를 클릭하면 맵 하단에 해당 주소정보 보여주기
  $(function () {
    let address = $('.option_list li a');
    let addressPanel = $('.option_address');
    address.click(function (e) {
        e.preventDefault(); //링크의 기본 속성 막아놓기
        //내가 클릭한 탭에만 active 부여하기
        address.removeClass('active'); //액티브 모두 제거
        $(this).addClass('active'); //클릭이벤트가 발생한 그 요소에만 액티브 추가
        addressPanel.hide();
        let $target = $(this).attr('href');
        $($target).show();
    });
});