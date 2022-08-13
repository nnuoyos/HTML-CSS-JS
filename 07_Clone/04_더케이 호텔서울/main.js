const toggleBtn = document.querySelector('.navbar_toggle_button');
const menu = document.querySelector('.navbar_menu');
const language = document.querySelector('.navbar_language');
const menuBox = document.querySelector('.menu_box');

toggleBtn.addEventListener('click', ()=>{
    menuBox.classList.toggle('active');
    menu.classList.toggle('active');
    language.classList.toggle('active');
});