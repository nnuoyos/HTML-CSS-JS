function plus(i) {
    //i 매개변수
    console.log(i + 100); //(i ~~) 매개변수
}

plus(5); //5 = 인자
console.log('prac02');
function welcome(name) {
    console.log('안녕하세요? ' + name + '님!');
}
//매개변수 사용하기
welcome('장소영');
welcome('허지훈');
welcome('최이서');
welcome('최문석');
welcome(1004);

console.log('prac03');
function printSquare(x) {
    console.log(x * x);
}
printSquare(2);
printSquare(4);

console.log('prac04');
//메모리 용량 계산기 만들기//
//함수 두개 teraToGiga, teraToMega
//테라바이트를 기가바이트로 환산, 테라바이트를 메가바이트로 환산
//1TB = 1024GB

function teraToGiga(x) {
    console.log(x * 1024 + 'GB');
}

function teraToMega(x) {
    console.log(x * 1024 * 1024 + 'MB');
}

teraToGiga(1);
teraToMega(1);

console.log('prac05');
function printSum(a, b) {
    console.log(a + b);
}

printSum(100, 150); //인자로 전달된 값이 더해진다

console.log('======prac06======');
/* 
함수 introduce를 정의하고 매개변수로 name, birth, national, job을 사용하여
콘솔창에 출력하기
*/

function introduce(name, birth, national, job) {
    console.log('안녕하세요! 반갑습니다');
    console.log('제 이름은 ' + name + '입니다');
    console.log('생년월일은 ' + birth + '이고,');
    console.log('국적은 ' + national + '이고,');
    console.log('직업은 ' + job + '입니다.');
    console.log('잘 부탁 드립니다!');
}

introduce('김철수', '1998.01.15', '한국', '회사원');
introduce('이영희', '1998.03.15', '중국', '무역회사원');

console.log('======prac07======');
/* 
BMI지수 계산하기
자신의 몸무게(kg)를 키의 제곱(m)으로 나눈 값
weight / (tall * tall) / 10000 )
*/

function BMItest(weight, tall) {
    let BMItest = weight / ((tall * tall) / 10000);
    console.log('BMI지수 : ' + BMItest);
}

BMItest(80, 183);
