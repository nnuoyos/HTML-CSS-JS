//문제 1번)
//1~100까지 더하는 for문 만들고 그 결과 출력하기

let sum = 0;
for (let i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);

console.log('======prac======');
//문제 2번
//1~100까지 홀수만 출력

for (let i = 1; i < 101; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}
console.log('======prac======');
//문제3번
//1~50까지 3 6 9의 결과 프린트 1 2 짝 4 5 짝

for (let i = 1; i < 51; i++) {
    let stringValue = i.toString(); //숫자를 문자열로 바꿔준다
    let hand = ''; //빈 문자열 저장
    for (let j = 0; j < stringValue.length; j++) {
        if (stringValue[j] == '3' || stringValue[j] == '6' || stringValue[j] == '9') {
            hand += '짝';
        }
    }
    console.log(hand.length > 0 ? hand : i);
}
console.log('======소수판별 prac======');
//문제4
//주어진 숫자가 소수이면 true 소수가 아니면 false 출력

//풀다가 만 것
// let num = 7;
// for (let i = 2; i <= num; i++) {
//     if (num == 0 && num == 1) {
//         // 0과 1 일 때
//         console.log('false 소수가 아닙니다');
//         break;
//     } else if (num % i == 0) {
//         //소수가 아닐 때
//         console.log('false 소수가 아닙니다');
//         break;
//     } else {
//         //소수 일 때
//         console.log('true 소수 입니다');
//     }
// }

//풀이 코드!
let n = 199;
let isPrime = true;
if (n === 1) {
    //1은 소수가 아니므로 제외
    isPrime = false;
}
for (let i = 2; i < n; i++) {
    if (n % i == 0) {
        isPrime = false;
    }
}
console.log(isPrime);
