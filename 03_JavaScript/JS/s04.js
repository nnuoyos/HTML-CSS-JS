//cafe(); //함수 호출 먼저 해도 된다 호이스팅 때문!

/* 함수의 선언 */
function cafe() {
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
}

cafe(); //함수 호출

console.log(''); //빈칸
/* 매개변수(parameter) / 인자 */
function plus(a, b) {
    console.log(a + b); //이 때 a, b는 인자
}

plus(3, 7); //함수 호출 3,7 은 매개변수
plus(3); //Not a Number

console.log(''); //빈칸
/* 삼각형의 넓이 계산기 */

function triangle(bottom, height) {
    let area = (bottom * height) / 2;
    console.log(area);
}

triangle(10, 20);
triangle(30, 20);
triangle(30, 10);
triangle(120, 220);
triangle(150, 220);

console.log(''); //빈칸
/* 애국가 1~4절 */
console.log('1절');
console.log('동해물과 백두산이 마르고 닳도록');
console.log('하느님이 보우하사 우리나라 만세');
verse();
console.log('2절');
console.log('남산 위에 저 소나무, 철갑을 두른 듯');
console.log('바람서리 불변함은 우리 기상일세.');
verse();
console.log('3절');
console.log('가을 하늘 공활한데 높고 구름 없이');
console.log('밝은 달은 우리 가슴 일편단심일세.');
verse();
console.log('4절');
console.log('이 기상과 이 맘으로 충성을 다하여');
console.log('괴로우나 즐거우나 나라 사랑하세');
verse();

function verse() {
    //후렴 함수
    console.log('*무궁화 삼천리 화려강산');
    console.log('*대한 사람 대한으로 길이 보전하세');
}
