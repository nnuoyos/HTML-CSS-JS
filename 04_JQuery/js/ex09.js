let s = 0;
let photo = $('.sImgBox');
let pager = $('.sPager ul li');
let btnPrev = $('.sPrev');
let btnNext = $('.sNext');
let all = photo.size();
//size() 명령 : 선택 된 자료의 개수를 저장하는 명령

//초기값 세팅
photo.eq(s).css({
    left: 0,
});
pager.eq(s).addClass('active');

//페이저 클릭
pager.on({
    click: function () {
        let j = $(this).index(); //순서값 저장
        pager.removeClass('active');
        $(this).addClass('active');
        if (j > s) {
            moveToLeft(j);
        } else {
            moveToRight(j);
        }
    },
});

//함수 정의
function moveToLeft(i) {
    //i라는 매개변수를 통해 기능한다
    let currentPhoto = photo.eq(s); //초기화 순서값
    let newPhoto = photo.eq(i); //지금 전달받은 순서값 i
    currentPhoto.stop().animate({ left: '-100%' }, 1500); //시간 설정 1000단위에 1초
    newPhoto.css({ left: '100%' }).stop().animate({ left: 0 }, 1500);
    s = i;
}

function moveToRight(i) {
    let currentPhoto = photo.eq(s);
    let newPhoto = photo.eq(i);
    currentPhoto.stop().animate({ left: '100%' }, 1500);
    newPhoto.css({ left: '-100%' }).stop().animate({ left: 0 }, 1500);
    s = i;
}

//좌우 버튼

btnPrev.on({
    click: function () {
        let n = s - 1;
        if (n < 0) {
            //인덱스는 0부터 시작 사진은 4개지만 0 1 2 3
            n = all - 1;
        }
        pager.eq(n).click();
    },
});

btnNext.on({
    click: function () {
        let n = s + 1; //현재값보다 +1해야 다음값으로 넘어감
        if (n == all) {
            //n의 최대값 설정
            //인덱스는 0부터 시작 사진은 4개지만 0 1 2 3
            n = 0;
            //인덱스가 맥스(4번째 사진)일때 다음을 누르면, 인덱스 첫번째 값으로 만들어서 첫번째 사진으로 만든다
        }
        pager.eq(n).click();
    },
});
