const result_p = document.getElementById('result');

const numbers_button = document.querySelectorAll('.numbers button');
numbers_button.forEach(function(n) {
  n.addEventListener('click',function(){
    if (result_p.innerHTML == 0){
      result_p.innerHTML = n.innerHTML;
    } else {
      result_p.innerHTML = result_p.innerHTML + n.innerHTML;
    };
  });
});

const operators_button = document.querySelectorAll('.operators button');
operators_button.forEach(function(o) {
  o.addEventListener('click',function(){
    result_p.innerHTML += o.innerHTML;
  });
});

const equal_button = document.getElementById('equal');
equal_button.addEventListener('click',function(){
    result_p.innerHTML = eval(result_p.innerHTML);
});

const clear_button = document.getElementById('clear');
clear_button.addEventListener('click',function(){
    result_p.innerHTML = 0;
});

const backspace_button = document.getElementById('backspace');
backspace_button.addEventListener('click',function(){
    if (result_p.innerHTML.length == 1) {
        result_p.innerHTML = 0;
    } else {
        result_p.innerHTML = result_p.innerHTML.slice(0,result_p.innerHTML.length - 1);
    };
});