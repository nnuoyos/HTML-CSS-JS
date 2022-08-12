console.log('prac 01');
function test_a() {
    let i = 1;
    //console.log(i);
    //document.write(i); //콘솔창이 아닌 웹상에 나타난다
}
//console.log(i);
//지역변수 i는 test_a 함수 안에서만 사용가능하다

console.log(test_a());

/* test_a() 함수안에서 선언된 변수i는 test_a()안에서만 의미를 가지고 사용할 수 있다
따라서 test_a()를 호출해도 변수i의 값을 활용할 수 없다  */

function test_b() {
    let j = 3;
    return j;
}
console.log(test_b());
/* 리턴문을 사용하면 함수안에서 선언된 변수j의 값을 함수가 호출되는 위치에 전달시켜 출력시킨다 */

console.log('prac 02');
function test_c() {
    let k = 5;
    return k / 2;
}

console.log(test_c());

console.log('prac 03');
function two() {
    let number = 10;
    return number * 2;
}

console.log(two());

console.log('prac 04'); //빈줄
let x = two();
let y = two();
console.log(x + y);
/* 매개변수로 활용할 수 있는 인자가 없을 때는 그 어떤 값을 매개변수로 집어넣어도 결과에 영향이 없다 */

console.log('prac 05');

function return_end() {
    document.write('명령이 1번 실행되었습니다');
    return;
    document.write('명령이 2번 실행되었습니다');
}
return_end();
/* 리턴은 함수의 안에서 함수종료의 기능으로도 사용가능하다 */

console.log('prac 06');
function return_sum(left, right) {
    return left + right;
}
document.write(return_sum(1500, 2500));
