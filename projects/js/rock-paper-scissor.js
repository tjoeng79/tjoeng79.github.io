function getCompChoice () {
    let comp = Math.random();

    if (comp < 0.34) return 'rock';
    if (comp >= 0.34 && comp <= 0.67) return 'paper';
    return 'scissor';
}

function getResult(player, comp) {
    if (player == comp) return 'DRAW';
    if (player == 'rock') return (comp == 'scissor') ? 'WIN' : 'LOSE';
    if (player == 'paper') return (comp == 'rock') ? 'WIN' : 'LOSE';
    if (player == 'scissor') return (comp == 'paper') ? 'WIN' : 'LOSE';
}

function rotateImages() {
    const compImage = document.querySelector('#comp');
    const choices = ['rock','paper','scissor'];
    let i = 0;
    let counter = 0;
    setInterval(function() {
        if (counter == 9) {
            clearInterval;
            return;
        }

        compImage.setAttribute('src','img/' + choices[i] + '.jpg');
        i++;
        counter++;
        if (i == choices.length) i = 0;
    }, 100);
}

const playerInfo = document.getElementById('player-text');
playerInfo.addEventListener('click',function(){
    let playerName = prompt('Enter your name:');
    playerInfo.innerHTML = playerName;
});

let compScore = 0;
let playerScore = 0;

let playerChoices = document.querySelectorAll('.player-area img');
playerChoices.forEach(function(choice) {
    choice.addEventListener('click',function(){
        const comp = getCompChoice();
        const player = choice.getAttribute('id');
        
        const result = getResult(player,comp);

        if (result == 'WIN') {
            playerScore++;
        } else if (result == 'LOSE') {
            compScore++;
        }

        rotateImages();

        setTimeout(function(){
            const compImage = document.querySelector('#comp');
            compImage.setAttribute('src','img/' + comp + '.jpg');

            const infoText = document.getElementById('info-text');
            infoText.innerHTML = result;

            const compText = document.getElementById('comp-text');
            compText.innerHTML = 'Computer : ' + compScore ;

            const playerText = document.getElementById('player-text');
            playerText.innerHTML = playerName + ' : ' + playerScore ;
            
        },1000);
    });
});