
let image = $('.photoBox');
let pager = $('.pager li');
//활성화 중인 대상의 순서값 저장

let c = 0;

pager.on({
    click: function () {
        //클릭한 대상의 순서값
        let i = $(this).index();
        //현재 화명상의 이미지
        let currentImg = image.eq(c);
        //클릭으로 화면에 들어올 예정인 이미지
        let newImg = image.eq(i);
        //변수 i와 c의 값을 비교해서 동작 방향을 다르게 설정
        //i == c -> 활성화 중인 버튼을 클릭했다...여기서 명령 종료
        //i > c -> 활성화 중인 버튼의 오른쪽 버튼을 클릭... 오른쪽에서 왼쪽으로 이동
        //i < c -> 활성화 중인 버튼의 왼쪽 버튼을 클릭...왼쪽에서 오른쪽으로 이동
        if (i == c) return false;
        if (i > c) {
            currentImg.stop().animate({ top: '100%' });
            newImg.css({ top: '-100%' }).stop().animate({ top: 0 });
        }
        if (i < c) {
            currentImg.stop().animate({ top: '-100%' });
            newImg.css({ top: '100%' }).stop().animate({ top: 0 });
        }
        //현재값 위치
        c = i;
        //버튼 온오프
        pager.removeClass('active');
        pager.eq(i).addClass('active');
    },
});

/* 
$('셀렉터').이벤트() => 스크립트에 의해 추가되는 영역에는 이벤트 적용 불가
$('셀렉터').on(이벤트) => 스크립트에 의해 추가되는 영역에도 이벤트 적용 가능
*/
