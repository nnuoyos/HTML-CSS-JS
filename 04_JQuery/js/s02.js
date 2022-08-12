$('.box1 span').text('매우 맑음');

/*JavaScript로 작성하게 될 예시 
let text = document.getElementsByClassName('box1');
text.textContent = '오늘 날씨 완전 더움'; */

let days = '금';
$('.box2 span').text(days);

let p31 = $('.p31').text();
$('.box3 .p32').text(p31);

let userName = $('.box4 .p41').text();
$('.box4 .p42').html(`<strong>${userName}</strong>님, 환영합니다.`);
