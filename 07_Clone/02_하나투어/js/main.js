/* banner close button */
function bannerHide(){
    document.getElementById('topBn').style.display="none"
}
/* 전체메뉴 탭 토글메뉴 */
const closeButton = document.querySelector('.all_close');
const menuAllTab = document.querySelector('.open_all_menu');
const menuAllList = document.querySelector('.menu_all_list')

//전체메뉴 탭 버튼 클릭시 일어날 함수
menuAllTab.addEventListener('click', (event) => {
    menuAllList.classList.toggle('active');
    event.currentTarget.classList.toggle('active-1');
});