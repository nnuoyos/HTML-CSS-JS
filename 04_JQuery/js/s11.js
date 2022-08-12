$('.box1')
    .mouseover(function () {
        $('.box1 p').stop().fadeOut();
    })
    .mouseout(function () {
        $('.box1 p').stop().fadeIn();
    });
