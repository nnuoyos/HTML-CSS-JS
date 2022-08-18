const toggleBtn = document.querySelector('.navbar_toggle_button');
const menu = document.querySelector('.navbar_menu');
const language = document.querySelector('.navbar_language');
const menuBox = document.querySelector('.menu_box');

toggleBtn.addEventListener('click', ()=>{
    menuBox.classList.toggle('active');
    menu.classList.toggle('active');
    language.classList.toggle('active');
});
/* slide */
//슬라이드 전체 크기
const slide = document.querySelector('.slide_box');
let slideWidth = slide.clientWidth;
//슬라이드 전체를 선택해 값을 변경하기 위해 슬라이드 전체 선택하기
const slideItemBox = document.querySelectorAll('slide_img_box');
const maxSlide = slideItemBox.length;

//현재 위치
let currSlide = 1;

/* pagination */
//페이지네이션 생성
const pagination = document.querySelector('.slide_pagination');

for (let i = 0; i < maxSlide; i++) {
    if (i == 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
  }

const paginationImg = document.querySelectorAll('.slide_pagination > li');
console.log(paginationImg); //배열로 li들이 하나씩 들어있음

//슬라이드 이동시 조건 마지막 이상 넘어가지 않게
if (currSlide <= maxSlide) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide--;
  }
// 첫번째 이하로 이동하지 않게
  if (currSlide > 0) {
    // 슬라이드를 이동시키기 위한 offset 계산
    const offset = slideWidth * (currSlide - 1);
    // 각 슬라이드 아이템의 left에 offset 적용
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    // 슬라이드 이동 시 현재 활성화된 pagination 변경
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide++;
  }

// 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
  });

//각 페이지네이션 클릭시 해당 슬라이드로 이동
for(let i=0; i<maxSlide; i++){
    paginationImg[i].addEventListener("click",()=>{
        //클릭한 페이지네이션에 현재 슬라이드로 변경
        slideNow = i+1;
        //슬라이드 이동시키기 위한 계산
        const offset = slideWidth * (currSlide -1);
        //슬라이드 아이템에 offset 적용
        slideItemBox.forEach((i)=>{
            i.setAttribute("style", `left: ${-offset}px`);
        });
        //슬라이드 이동시 현재 활성화 된 페이지네이션 변경
        paginationImg.forEach((i)=>i.classList.remove("active"));
        paginationImg[currSlide-1].classList.add("active");
    });
}