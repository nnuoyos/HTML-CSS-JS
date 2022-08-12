//1. "안녕 내 이름은 제시카야" 라는 문장을 프린트하는 함수 'greet' 을 만드시오

function greet() {
    console.log('안녕 내 이름은 제시카야');
}
greet();

console.log('======1번 끝======');

//2. 이름을 매개변수로 전달 받아 다양한 이름을 프린트할 수 있게 함수를 수정하시오
//예) "안녕 내 이름은 에밀리야" "안녕 내 이름은 할리야"

//3. 매개변수로 전달 받은 이름을 반환하게 함수를 수정하시오

function greetName(name) {
    console.log('안녕 내 이름은' + name + '이야');
    return name;
}

greetName('hally');
greetName('emilly');

console.log('======2, 3번 끝======');

//4. meetAt 함수를 만들어 주세요
/* 결과 예시)
meetAt(2022);  결과 --> 2022년
meetAt(2022, 3);  결과 --> "2022년 3월"
meetAt(1987, 10, 28); 결과 --> "1987/10/28" */

/* function meetAt(year, month, day){
    
} */

console.log('======4번 구분선======');

//5. findSmallestElement 함수를 구현 해주세요
/* 
arr의 값들 중 가장 작은 값을 리턴 해주세요 
만일 arr 가 비어 있으면 0을 리턴 해주세요 */

let arr = [12, 5, 87, 9, 2, 90];
function findSmallestElement(arr) {
    let min = arr[0];
    //배열 하나씩 돌면서 비교하기
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
}

findSmallestElement(arr);
console.log('======5번 끝======');

//6. 돈을 매개변수로 받으면 몇개의 지폐와 동전이 필요한 지 최소 개수를 계산해주는 함수를 만드시오
/* 출력예)
12300인 경우
50000 x 0
10000 x 1
5000 x 0
1000 x 2
500 x 0
100 x 3 */

//지폐, 동전 금액별로 나눠 떨어지는지?
/* function money(cash){
    let cash=12300;
    if(cash / 10000 == 0){
        cash10000 = cash / 10000;
        console.log("50000 x" +cash10000);
    }
    
}

money(cash); */
console.log('======6번 구분선======');
