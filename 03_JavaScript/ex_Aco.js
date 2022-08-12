function changeView() {
    let divEle = document.querySelector('div');
    let cls = divEle.getAttribute('class');

    if (cls == 'hidden') {
        cls = 'show';
    } else {
        cls = 'hidden';
    }
    divEle.setAttribute('class', cls);
}
