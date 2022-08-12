/* $('.gnb .main').click(function () {
    let d = $(this).siblings('.sub').css('display');
    if (d == 'block') {
        return false;
    }
    $('.gnb .sub').slideUp();
    $(this).siblings('.sub').slideDown();
    $('.gnb .main').removeClass('on');
    $(this).addClass('on');
    return false; //한번 실행시킨 후 종료되도록 하기
}); */

function changeView() {
    let divEle = document.querySelector('div');
    let cls = divEle.getAttribute('class');

    if (cls == 'main') {
        cls = 'show';
    } else {
        cls = 'hidden';
    }
    divEle.setAttribute('class', cls);
}

//for문으로 length 체크해서 0보다 크면 실행하도록

//let d = document.querySelectorAll("gnb menu sub").style.display;
//gnb태그 밑에 있는 menu, 밑의 sub의 css속성 display를 d에 저장

/* function click(d){
	sub=document.getElementsByClassName("sub");
	for(i=0;i<sub.length;i++){
		if(sub[i].className=="sub"){
			sub[i].style.display="none";
		}else if(sub[i].className=="main"){
			sub[i].onclick=openDisplay;
		}
	}
} */

//클릭하면 열리기
/* function openDisplay(){
	var parent=this.parentNode;
	var target=parent.getElementsByClassName("sub")[1];

	if(target.style.display=="none"){
		target.style.display="block";
	}else{
		target.style.display="none";
	}
	return false;
} */

//메인클릭시 일어날 일

/* for(let i=0; i<main.length; i++){
	main[i].addEventListener('click', function(e){
		for(let j=0; j<sub.length;j++){
			show[j].classList.remove('active');
			e.target.parentNode.classList.add('active');
			activateBody();
		}
	})
}

 */
