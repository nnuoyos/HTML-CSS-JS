let s = 0;
let photo = $('.sImgBox');
let pager = $('.sPager ul li');
let btnPrev = $('.sPrev');
let btnNext = $('.sNext');
let all = photo.size();
//size() : 선택된 자료의 개수를 저장

let autoplay;
let play = $('.sPlay');
let stop = $('.sStop');

//초기값 세팅
photo.eq(s).css({
    left: 0,
});
pager.eq(s).addClass('active');

//페이저 클릭
pager.on({
    click: function () {
        //j는 function안에서만 사용되고 있는 지역함수
        let j = $(this).index();
        pager.removeClass('active');
        $(this).addClass('active');
        if (j > s) {
            moveToLeft(j);
        } else {
            moveToRight(j);
        }
    },
});

//좌우버튼
btnPrev.on({
    click: function () {
        let n = s - 1;
        if (n < 0) {
            n = all - 1;
        }
        pager.eq(n).click();
    },
});

btnNext.on({
    click: function () {
        let n = s + 1; //다음으로 넘어가야 하기 때문에 현재 순서값에 +1
        if (n == all) {
            n = 0; //n이 all 개수와 같다면 n을 다시 첫번째 사진으로 보이게 한다
        }
        pager.eq(n).click();
    },
});

//재생, 일시정지 버튼
stop.on({
    click: function () {
        clearInterval(autoplay);
        stop.hide();
        play.show();
    },
});

play.on({
    click: function () {
        timer();
        play.hide();
        stop.show();
    },
});

//함수 생성
function moveToLeft(i) {
    let currentPhoto = photo.eq(s);
    let newPhoto = photo.eq(i); //입력된 사진의 순서값 저장
    currentPhoto.stop().animate(
        {
            left: '-100%',
        },
        1500
    );
    newPhoto
        .css({
            left: '100%',
        })
        .stop()
        .animate(
            {
                left: 0,
            },
            1500
        );
    s = i;
}

function moveToRight(i) {
    let currentPhoto = photo.eq(s);
    let newPhoto = photo.eq(i); //입력된 사진의 순서값 저장
    currentPhoto.stop().animate(
        {
            left: '100%',
        },
        1500
    );
    newPhoto
        .css({
            left: '-100%',
        })
        .stop()
        .animate(
            {
                left: 0,
            },
            1500
        );
    s = i;
}

//자동재생 함수 생성
timer(); //호출 먼저해서 시작하고 있게 만든다

function timer() {
    //변수 autoplay는 멈춤버튼을 클릭할 때에 사용해야 하기 때문에 전역변수로 선언되어야 한다
    autoplay = setInterval(function () {
        let n = s + 1; //다음으로 넘어가야 하기 때문에 현재 순서값에 +1
        if (n == all) {
            n = 0; //n이 all 개수와 같다면 n을 다시 첫번째 사진으로 보이게 한다
        }
        pager.eq(n).click();
    }, 3000);
}

/* 
-자동재생 명령
setInterval(함수, 시간);
설정한 시간의 간격마다 함수 명령을 반복실행

-자동재생 멈춤
clearInterval(변수);

setInterval() 명령을 단독으로 사용해도 실행은 되지만, 만약 clearInterval() 명령을 사용해서
자동재생을 컨트롤하기 위해서는 변수안에 setInterval() 명령을 저장해둬야 한다

let 변수 이름 = setInterval(함수, 시간);
clearInterval(변수이름);

*/
