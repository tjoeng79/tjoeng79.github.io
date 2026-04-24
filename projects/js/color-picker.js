const colorArea_div = document.querySelector('.color-area');
const infoRed_p = document.getElementById('info-red');
const infoGreen_p = document.getElementById('info-green');
const infoBlue_p = document.getElementById('info-blue');

let colorR = 0;
let colorG = 0;
let colorB = 0;

colorArea_div.addEventListener('input',function(e){
  if (e.target.id == 'input-red'){
    colorR = e.target.value
    infoRed_p.textContent = colorR;
  };    

  if (e.target.id == 'input-green'){
    colorG = e.target.value
    infoGreen_p.textContent = colorG;
  };

  if (e.target.id == 'input-blue'){
    colorB = e.target.value
    infoBlue_p.textContent = colorB;
  };
    
  colorArea_div.style.backgroundColor = `rgb(${colorR},${colorG},${colorB})`;
});