let age = 21;
if (age > 20) {
    console.log('운전면허 취득 가능!');
} else {
    console.log('운전면허 취득 불가능');
}

console.log('======prac======');
let age1 = 19;
if (age1 > 20) {
    console.log('운전면허 취득 가능!');
} else if (age1 >= 18) {
    console.log('오토바이 운전면허 취득 가능');
} else {
    console.log('운전면허 취득 가능!');
}
console.log('======prac======');
let age2 = 21;
if (age2 >= 18) {
    console.log('오토바이 운전면허 취득 가능');
} else if (age2 > 20) {
    console.log('운전면허 취득 가능!');
} else {
    console.log('운전면허 취득 가능!');
}
/* 먼저 접촉되는 조건의 결과가 true값이 나오면 뒤의 조건문을 다 탈출한다
들어가는 조건문의 순서가 중요하다!!! */
console.log('======prac======');
let age3 = 21;
if (age3 >= 18 && age3 < 20) {
    console.log('오토바이 운전면허 취득 가능');
} else if (age3 > 20) {
    console.log('운전면허 취득 가능!');
} else {
    console.log('운전면허 취득 가능!');
}
/* 
18 <= age3 && age3 < 20 => 18<=age3<20 범위설정시 이렇게 작성하면 안된다
*/
console.log('======prac======');
let age4 = 21;
let license = false;
if (age4 > 20) {
    if (license == true) {
        console.log('운전이 가능 합니다');
    } else {
        console.log('면허부터 따세요');
    }
} else {
    console.log('운전이 불가능 합니다');
}
console.log('======prac======');
//입력하는 숫자가 0인지, 음수인지, 양수인지 판단하는 코드 만들기
let num = 0;
if (num > 0) {
    console.log('양수 입니다');
} else if (num == 0) {
    console.log('0 입니다');
} else {
    console.log('음수 입니다');
}
console.log('======prac======');
//나는 대학교수이다 레포트 점수의 등급 프로그램을 만든다
/* 
점수 등급
90~100 A
80~89 B
70~79 C
60~69 D
less than 59 F
*/

let score = 8998;
let grade = '';

if (score >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score <= 89) {
    grade = 'B';
} else if (score >= 70 && score <= 79) {
    grade = 'C';
} else if (score >= 60 && score <= 69) {
    grade = 'D';
} else if (score >= 0 && score <= 59) {
    grade = 'F';
} else {
    console.log('잘못된 입력 입니다');
}
console.log(grade);
