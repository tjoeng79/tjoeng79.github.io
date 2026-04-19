const choices = ['','rock','paper','scissor'];
const infoText_p = document.getElementById('info-text');
infoText_p.textContent = '.';

const comp_img = document.querySelector('#comp');
const compInfo_p = document.getElementById('comp-info');

const playerInfo_p = document.getElementById('player-info');
let playerName = playerInfo_p.textContent;

let compScore = 0;
let playerScore = 0;

playerInfo_p.addEventListener('click',function(){
    let newName = prompt('Enter your name:');
    if (newName != null && newName != '') {
        playerName = newName;
        compScore = 0;
        playerScore = 0;
        playerInfo_p.textContent = playerName;
        compInfo_p.textContent = "Computer";
        infoText_p.textContent = '.';
    }
});

let playerChoices_div = document.querySelectorAll('.player-area img');
playerChoices_div.forEach(function(p) {
    p.addEventListener('click',function(){
        const comp = Math.floor(Math.random() * 3 + 1);
        const player = p.getAttribute('id').split('player')[1];        

        const result = getResult(choices[player],choices[comp]);

        if (result == 'WIN') {
            playerScore++;
        } else if (result == 'LOSE') {
            compScore++;
        }

        rotateImages();

        setTimeout(function(){
            comp_img.setAttribute('src','img/rps' + comp + '.jpg');
            compInfo_p.textContent = `Computer : ${compScore}`;
            infoText_p.textContent = result;
            playerInfo_p.textContent = `${playerName} : ${playerScore}`;            
        },1000);
    });
});

function getResult(player, comp) {
    if (player == comp) return 'DRAW';
    if (player == 'rock') return (comp == 'scissor') ? 'WIN' : 'LOSE';
    if (player == 'paper') return (comp == 'rock') ? 'WIN' : 'LOSE';
    if (player == 'scissor') return (comp == 'paper') ? 'WIN' : 'LOSE';
}

function rotateImages() {
    let i = 1;
    let counter = 1;
    infoText_p.textContent = '.';
    
    setInterval(function() {
        if (counter == 9) {
            clearInterval;
            return;
        }

        comp_img.setAttribute('src','img/rps' + i + '.jpg');
        infoText_p.textContent += "."
        i++;
        counter++;
        if (i == choices.length) i = 1;
    }, 100);
}