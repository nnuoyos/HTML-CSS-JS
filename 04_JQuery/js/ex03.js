$('.gnb .d1')
    .mouseover(function () {
        $('.gnb .d1 .sub').hide();
        $(this).find('.sub').show();
    })
    .mouseout(function () {
        $(this).find('.sub').hide();
    });

//find() -> 셀렉터 영역 안쪽에 작성된 태그 중 원하는 대상을 선택
