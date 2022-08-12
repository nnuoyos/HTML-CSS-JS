let photoBox = $('.photoBox');
let btn = $('.pager li');
//화면에 출력 중인 이미지의 순서값 저장

let c = 0;

btn.click(function () {
    /* 활성화 된 버튼 동작 취소, 색상 변경 */
    let i = $(this).index();
    if (i == c) {
        return false; //i의 값이 0번이라면 활성화 취소시킨다
    }
    btn.removeClass('active');
    $(this).addClass('active'); //pager 버튼 하나씩 누를 때마다 활성화 기능 추가
    /* 기존 이미지 슬라이드 시키기 */
    photoBox.eq(c).stop().animate({
        left: '100%', //옆으로 옮기기
    });
    /* 새 이미지 넘어오게 하기 */
    photoBox
        .eq(i)
        .css({
            left: '100%',
        })
        .stop()
        .animate({
            left: 0,
        });
    /* 위의 명령이 모두 실행완료 된 시점에서는 현재 이미지가 변경된다 */
    c = i; //초기값에 내가 클릭한 이미지의 순서값을 다시 대입하면 앞뒤 슬라이드 된다
});
