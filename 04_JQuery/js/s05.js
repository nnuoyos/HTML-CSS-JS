$('.btn p').click(function () {
    //변수 i에 현재 클릭한 대상의 순서값을 저장
    let i = $(this).index();
    //클릭한 시점에 활성화 된 버튼이 다를 수 있으니 모든버튼을 비활성화 시킴
    //버튼의 비/활성화 결정짓는 on은 스타일시트에 적용시켜둠
    $('.btn p').removeClass('on');
    //현재 클릭한 대상에만 활성화 시킨다
    $(this).addClass('on');
    //클릭한 시점에 활성화 된 패널이 다를 수 있으니 모든 패널을 비활성화 시킨다
    $('.pannel .inner').removeClass('view');
    //패널 중 i번째..(변수i에는 현재 클릭한 대상의 순서값이 저장되어 있음)
    //패널만 선택해서 활성화 시킨다
    $('.pannel .inner').eq(i).addClass('view');
});
