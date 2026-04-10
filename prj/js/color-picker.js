const container = document.querySelector('.container');
const infoRed = document.querySelector('info-text, .red');
const infoGreen = document.querySelector('info-text, .green');
const infoBlue = document.querySelector('info-text , .blue');

let colorR = 0;
let colorG = 0;
let colorB = 0;

container.addEventListener('input',function(e){
    if (e.target.id == 'input-red'){
        colorR = e.target.value
        infoRed.textContent = colorR;
    };
    
    if (e.target.id == 'input-green'){
        colorG = e.target.value
        infoGreen.textContent = colorG;
    };

    if (e.target.id == 'input-blue'){
        colorB = e.target.value
        infoBlue.textContent = colorB;
    };

    container.style.backgroundColor = 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
});