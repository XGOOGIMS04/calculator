const numbers = document.querySelectorAll('.btn');
const operate = document.querySelectorAll('.btn_operator');
const clear = document.querySelector(".btn_clear");
const allClear = document.querySelector(".btn_allClear");
const result = document.querySelector(".btn_result");

let process_num = document.querySelector("#process");
let calcResult = document.querySelector('#result');



numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        let current_num = process_num.textContent // 현재 문자열 가져오기
        let list = current_num.split(/[\+\-\*\/%×÷]/); // 정규식을 사용하여 연산자 기준으로 나눔
        let last = list.at(-1); // 마지막 요소 추출 
        console.log(last.length); // 마지막 요소 길이 확인
        if (last.length >= 9) return;// 10자리 되면 무시 
        process_num.textContent += btn.textContent; // 누른 숫자가 process 박스 안에 보임. 이어붙이기
    });
})

operate.forEach((oper) => {
    oper.addEventListener('click', () => {
        let value = oper.textContent;
        let display = value;
        if (value == "×") {
            value = "*";
        }
        if (value == "÷") {
            value = "/";
        }
        process_num.textContent += display;
    });
})

result.addEventListener('click', () => {
    let expression = process_num.textContent; // 전체 문자열    
    expression = expression.replaceAll("%", "/100");   

    try {
        let calc = eval(expression);
        calcResult.textContent = calc.toLocaleString("ko-KR"); // 3자리 마다 콤마찍기
    } catch {
        calcResult.textContent = "계산오류";
    }
})

// reload를 할랬는데, 새로고침은 무거운 상태라고 해서 이걸 많이 쓴다고 함.
allClear.addEventListener('click', () => {
    process_num.textContent = "";
    calcResult.textContent = "";
})

// 지우기. slice 만 하면 자르기만 하고 반환하지 않아서 다시 대입을 해줘야함
clear.addEventListener('click', () => {
    process_num.textContent = process_num.textContent.slice(0, -1);
})