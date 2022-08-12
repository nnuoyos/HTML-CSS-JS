/* 
아메리카노 : 4000원 
라떼 : 4500원
카푸치노 : 4500원
쿠키 : 3000원
*/
/* 
1. 아메리카노 3잔, 쿠키2개
2. 아메리카노 2잔 라떼2 쿠키2
3. 아메리카노 2 라떼2 카푸치노3 쿠키4  */
console.log(4000 * 3 + 3000 * 2);
console.log(4000 * 2 + 4500 * 2 + 3000 * 2);
console.log(4000 * 2 + 4500 * 2 + 4500 * 3 + 3000 * 4);
/* 
위와 같이 작성된 코드의 단점
-오타가 발생하기 쉽다
-오타가 발생 되면 다른 코드에 대한 신뢰가 하락하기 때문에 전체적인 검수가 들어갈 수 밖에 없다
-해당 숫자들의 의미를 나만 알고 있기 때문에 다른 사람과 협업하기 위해서는 각 숫자가 가지는 의미를 일일이 설명해놓아야 한다
-만약 가격의 변동이 생긴다면 해당 가격의 정보를 알아내서 하나씩 다 수정해야 한다
 */

/* 
아메리카노 : 4000원 
라떼 : 4500원
카푸치노 : 4500원
쿠키 : 3000원
*/
let americano = 4000;
let latte = 4500;
let capuchino = 4500;
let cookie = 3000;

console.log(americano * 3 + cookie * 2);
console.log(americano * 2 + latte * 2 + cookie * 2);
console.log(americano * 2 + latte * 2 + capuchino * 3 + cookie * 4);
americano = 4300;

console.log(americano * 3 + cookie * 2);
console.log(americano * 2 + latte * 2 + cookie * 2);
console.log(americano * 2 + latte * 2 + capuchino * 3 + cookie * 4);
console.log(''); //빈칸

//22-05-21
const CUP = 10000; //상수 선언(대문자로) 초기화 시지키 않으면 오류 발생
// 불가능 => cup = 9000; 상수는 변하지 않는 값

//지금 년도 : currentYear
//출생 년도 : BIRTH_YEAR
//결과 값이 저장할 변수 : currentAge

const BIRTH_YEAR = 1993;
let currentYear = 2022;
currentAge = currentYear - BIRTH_YEAR;
console.log(currentAge);

console.log(''); //빈칸

console.log(first);
var first = 15;
console.log(first);
var first = 5;
console.log(first);

console.log(''); //빈칸
//var 중복선언이 가능. 위험하다
/*
호이스팅 : JavaScript가 js.문서를 읽어들일 때에  변수,함수,상수를 먼저 읽어들여 메모리에 저장하는 행위
*/

//음료의 칼로리 계산기
/*
에스프레소 10 우유 170 초코시럽 50 휘핑크림 60 아메리카노=에스프레소
라떼=에스프레소+우유
모카=에스프레소+초코시럽+우유
휘핑모카=에스프레소+초코시럽+우유+휘핑크림

아메리카노
라떼
모카
휘핑모카
출력하기
*/

let espresso = 10;
let milk = 170;
let chocolate_syrup = 50;
let whipping = 60;

const AMERICANO = espresso;
const LATTE = espresso + milk;
const MOCHA = espresso + chocolate_syrup + milk;
const WHIPPING_MOCHA = espresso + chocolate_syrup + milk + whipping;

console.log('americano 칼로리: ' + AMERICANO);
console.log('latte 칼로리: ' + LATTE);
console.log('mocha 칼로리: ' + MOCHA);
console.log('whippingMocha 칼로리: ' + WHIPPING_MOCHA);

console.log(''); //빈칸
