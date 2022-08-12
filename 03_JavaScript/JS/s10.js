console.log(typeof 486);
//숫자형 Number 로 출력이 된다
console.log(typeof '프론트엔드');
//문자형 String 으로 출력
console.log(typeof '486');
console.log('=======prac======');
let a = 486;
console.log(typeof a);
//변수에 저장된 자료의 유형을 체크
console.log('=======prac======');
function frontEnd() {
    console.log('Hello! World!');
}
console.log(typeof frontEnd);
//함수의 자료유형은 function 함수로 출력 된다
console.log('=======prac======');
console.log(typeof 4 + 3);
//typeof 4의 자료유형이 Number로 출력되고,(typeof연산이 사칙연산보다 우선순위를 가진다)
//숫자 3이 거기에 이어져 나오는 것이므로 결과값은 Number3으로 나온다
console.log('=======prac======');
console.log(typeof (4 + 3));
//괄호를 사용해서 묶어두면 괄호 안의 내용을 우선연산하고 그 후에 자료형을 판단
console.log('=======prac======');
console.log(typeof 'Hello!' + 'World!');
console.log(typeof ('Hello!' + 'World!'));
console.log('=======prac======');
console.log(typeof 4 - 3);
//결과 값이 Not a Number 로 출력 된다
//더하기 연산 비교는 문자와 숫자를 결합하는 역할도 하지만,
//나머지 연산 기호들은 숫자끼리만 연산 가능 하다
console.log('=======prac======');
console.log(typeof true);
/* boolean형의 자료유형은 boolean */
console.log(typeof 4 < 2);
console.log(typeof 4 > 2);
console.log(typeof 4 == false);
console.log(typeof 4 == 'number');
console.log(typeof 4 === 'number');
/* typeof 4 라는 결과물이 문자열 number로 출력되므로 문자열에 담긴 문자와의 비교는 트루가 나온다 */
console.log(typeof (4 > 2));
