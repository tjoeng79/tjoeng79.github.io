const cards_div = document.querySelectorAll('.portfolio div.card');

const totalCardCount = 6;
let currentIndex = 0;

setInterval(() => {
  if (currentIndex === totalCardCount) {
    currentIndex = 1;
  } else {
    currentIndex++;
  }

  slideCard(currentIndex);  
}, 3000);

function slideCard(index) {
  cards_div.forEach(function(card) {
    let cardImg =  card.querySelector('.card-body img');
    let cardTitle = card.querySelector('.card-body h5');

    cardImg.setAttribute('src',`img/portfolio${index}.png`);
    cardTitle.textContent = `Project-${index}`;

    if (index === totalCardCount) {
      index = 1;
    } else {
      index++;
    }
  });
}