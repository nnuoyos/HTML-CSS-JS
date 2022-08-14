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
const slide = document.querySelector('.slide_box');
let slideWidth = slide.clientWidth;

const slideItemBox = document.querySelectorAll('slide_img_box');
const maxSlide = slideItemBox.length;
let slideNow = 1;

/* pagination */
const pagination = document.querySelector('.slide_pagination');


for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
  }

const paginationImg = document.querySelectorAll('.slide_pagination > li');
console.log(paginationImg)

for(let i=0; i<maxSlide; i++){
    paginationImg[i].addEventListener("click",()=>{
        slideNow = i+1;
        const offset = slideWidth * (slideNow -1);
        slideItemBox.forEach((i)=>{
            i.setAttribute("style", `left: ${-offset}px`);
        });
        paginationImg.forEach((i)=>i.classList.remove("active"));
        paginationImg[slideNow-1].classList.add("active");
    });
}