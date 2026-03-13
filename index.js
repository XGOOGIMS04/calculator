const numbers = document.querySelectorAll('.btn');
const operate = document.querySelectorAll('.btn_operator');
const clear = document.querySelector(".btn_clear");
const allClear = document.querySelector(".btn_allClear");
const result = document.querySelector(".btn_result");

let process_num = document.querySelector("#process");
let calcResult = document.querySelector('#result');



numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        process_num.textContent += btn.textContent; // 누른 숫자가 process 박스 안에 보임. 이어붙이기
    });
})

operate.forEach((oper) => {
    oper.addEventListener('click', () => {
        process_num.textContent += oper.textContent; // 연산자가 div박스 안에 이어붙옂ㅁ
    });
})

result.addEventListener('click', () => {
    let expression = process_num.textContent;

    expression = expression.replaceAll("×", "*");
    expression = expression.replaceAll("÷", "/");    
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