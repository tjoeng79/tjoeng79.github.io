const info = document.getElementById('info-text');
let num1 = 0;
let num2 = 0;
let lastOperator = '';
let isOperator = false;

const numbers = document.querySelectorAll('.number-area button');
numbers.forEach(function(n) {
    n.addEventListener('click',function(){
        if (isOperator) {
            info.innerHTML = parseInt(n.innerHTML);
        } else {
            info.innerHTML = parseInt(info.innerHTML + n.innerHTML);
        }
        isOperator = false;
    });
});

const operators = document.querySelectorAll('.operator-area button');
operators.forEach(function(o) {
    o.addEventListener('click',function(){
        let operator = o.innerHTML;

        if (operator == 'C') {
            num1 = 0;
            num2 = 0;
            lastOperator = '';
            isOperator = false;
            info.innerHTML = num1;
            return;
        }

        if (lastOperator == '') {
            num1 = parseInt(info.innerHTML);
            lastOperator = operator;
        } else {            
            num2 = parseInt(info.innerHTML);
            num1 = compute(lastOperator,num1,num2);
            info.innerHTML = num1;

            if (operator == '=') {
                lastOperator = '';
            } else {
                lastOperator = operator;
            }
        }

        isOperator = true;
    });
});

function compute(operator, num1, num2) {
    switch (operator){
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}