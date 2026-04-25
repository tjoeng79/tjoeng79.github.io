class Movie {
  constructor(title, year, genre, description, director, cast) {
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.description = description;
    this.director = director;
    this.cast = cast;
  }
}

const movie1 = new Movie('I Am Sam','2001','Drama','An intellectually disabled man fights for custody of his 7-year-old daughter and in the process teaches his cold-hearted lawyer the value of love and family.','Jessie Nelson','Sean Penn, Michelle Pfeiffer, Dakota Fanning');
const movie2 = new Movie('Bruce Almighty','2003','Comedy','A whiny news reporter is given the chance to step into God shoes.','Tom Shadyac','Jim Carrey, Jennifer Aniston, Morgan Freeman');
const movie3 = new Movie('Taken','2008','Action','A retired CIA agent travels across Europe and relies on his old skills to save his estranged daughter, who has been kidnapped while on a trip to Paris.','Pierre Morel','Liam Neeson, Maggie Grace, Famke Janssen');

let layout1 = [-1,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let layout2 = [-1,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0];
let layout3 = [-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0];

let selectedLayout;

const seats_div = document.querySelectorAll('.seat');
const infoArea_div = document.querySelector('.info-area');
const seatArea_div = document.querySelector('.seat-area');

const infoTitle_p = document.getElementById('info-title');
const infoYear_p = document.getElementById('info-year');
const infoGenre_p = document.getElementById('info-genre');
const infoDescription_p = document.getElementById('info-description');
const infoDirector_p = document.getElementById('info-director');
const infoCast_p = document.getElementById('info-cast');

const cards_img = document.querySelectorAll('.card-area img');
cards_img.forEach(function(card){
  card.addEventListener('click',function(){
    let cardId = card.getAttribute('id');
    infoArea_div.style.display = 'block';
    seatArea_div.style.display = 'grid';

    if (cardId == 'card-1') {
      showMovieInfo(movie1);
      showSeatLayout(layout1);
      selectedLayout = layout1;
    };

    if (cardId == 'card-2') {
      showMovieInfo(movie2);
      showSeatLayout(layout2);
      selectedLayout = layout2;
    };

    if (cardId == 'card-3') {
      showMovieInfo(movie3);
      showSeatLayout(layout3);
      selectedLayout = layout3;
    };
  });
});

seats_div.forEach(function(seat){
  seat.addEventListener('click',function(e){
    let seatNo = e.target.textContent;

    if (selectedLayout[seatNo] == 0){
      selectedLayout[seatNo] = 1;
      e.target.style.color = 'tomato';
      e.target.style.borderColor = 'tomato';
    } else if (selectedLayout[seatNo] == 1) {
      selectedLayout[seatNo] = 0;
      e.target.style.color = 'lightgreen';
      e.target.style.borderColor = 'lightgreen';
    } else {
      alert(`SeatNo ${seatNo} is un-available.`);
    };
  });
});

function showMovieInfo(movie) {
  infoTitle_p.textContent = movie.title;
  infoYear_p.textContent = movie.year;
  infoGenre_p.textContent = movie.genre;
  infoDescription_p.innerHTML = `&quot${movie.description}&quot`;
  infoDirector_p.textContent = movie.director;
  infoCast_p.textContent = movie.cast;
}

function showSeatLayout(layout) {
  let i = 0;    
  seats_div.forEach(function(seat){
    switch (layout[++i]){
      case -1:
        seat.style.color = 'darkgrey';
        seat.style.borderColor = 'darkgrey';
        break;
      case 0:
        seat.style.color = 'lightgreen';
        seat.style.borderColor = 'lightgreen';
        break;
      case 1:
        seat.style.color = 'tomato';
        seat.style.borderColor = 'tomato';
        break;            
    }
  })
}