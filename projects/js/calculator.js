const info_p = document.getElementById('info-text');
let num1 = 0;
let num2 = 0;
let lastOperator = '';
let isOperator = false;

const numbers_button = document.querySelectorAll('.numbers button');
numbers_button.forEach(function(n) {
    n.addEventListener('click',function(){
        if (isOperator) {
            info_p.innerHTML = parseInt(n.innerHTML);
        } else {
            info_p.innerHTML = parseInt(info_p.innerHTML + n.innerHTML);
        }
        isOperator = false;
    });
});

const operators_button = document.querySelectorAll('.operators button');
operators_button.forEach(function(o) {
    o.addEventListener('click',function(){
        let operator = o.innerHTML;

        if (operator == 'C') {
            num1 = 0;
            num2 = 0;
            lastOperator = '';
            isOperator = false;
            info_p.innerHTML = num1;
            return;
        }

        if (lastOperator == '') {
            num1 = parseInt(info_p.innerHTML);
            lastOperator = operator;
        } else {            
            num2 = parseInt(info_p.innerHTML);
            num1 = compute(lastOperator,num1,num2);
            info_p.innerHTML = num1;

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