/* 
버튼을 클릭할 때
1. 클릭한 버튼의 순서값을 저장
2. 버튼 전체를 비활성화
3. 클릭한 버튼을 활성화
4. 사진 전체를 비활성화
5. 클릭한 순서값의 사진을 활성화
*/

/* 
btn li를 클릭 할 때,
1. li전체를 비활성화 시킨다 >> on 클래스 삭제 
2. 클릭 한 대상만 활성화 시킨다 >> on 클래스 추가
*/
$('.btn li').click(function () {
    let i = $(this).index(); //버튼을 클릭할 때
    $('.btn li').removeClass('on'); //li전체 비활성화
    $(this).addClass('on'); //내가 선택한 대상에만 해당하도록
    $('.photo li').css({
        display: 'none', //사진 전체를 비활성화
    });
    $('.photo li').eq(i).css({
        display: 'block', //클릭한 순서값의 사진을 활성화
    });
});
