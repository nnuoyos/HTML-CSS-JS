//변수 지정
let sliderWrapper = document.getElementsByClassName('container');
let sliderContainer = document.getElementsByClassName('slider-container');
let slides = document.getElementsByClassName('slide');
let slideCount = slides.length; //슬라이드 개수
let currentIndex = 0;
let topHeight = 0;
let navPrev = document.getElementById('prev');
let navNext = document.getElementById('next');

/* console.log(slideCount) */
//슬라이드의 높이 확인하여 부모의 높이로 지정하기
//각 슬라이드(li 텍스트)의 높이를 비교해서 맥스값 구해서 저장하기
function calculateTallestSlide(){
    for(let i=0; i<slideCount; i++){
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }

    sliderWrapper[0].style.height = topHeight + 'px';
    sliderContainer[0].style.height = topHeight + 'px';
}
calculateTallestSlide();

//슬라이드가 있으면 가로로 배열하기
//슬라이드 이동 함수
//버튼기능 업데이트 함수
//버튼 클릭시 슬라이드 이동시키기
