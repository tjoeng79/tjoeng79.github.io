const mainImage_img = document.getElementById('main-image');
const thumbsArea_div = document.querySelector('.thumbnail-area');
const thumbs_img = document.querySelectorAll('.thumb');

thumbsArea_div.addEventListener('click', function(e){
  if (e.target.className == 'thumb'){
    mainImage_img.src = e.target.src;
    mainImage_img.classList.add('fade');

    setTimeout(function(){
      mainImage_img.classList.remove('fade');
    }, 1000);

    thumbs_img.forEach(function(thumb) {
      thumb.classList.remove('active');
    });

    e.target.classList.add('active');
  }
});

let imgIndex = 0;
let slideDirection = 1;

setInterval(() => {
  if (slideDirection == 1) {
    slideNext();
  } else {
    slidePrev();
  }

}, 3000);

const nextBtn = document.getElementById('next-btn');
nextBtn.onclick = function() {
  slideDirection = 1;
  slideNext();
};

const prevBtn = document.getElementById('prev-btn');
prevBtn.onclick = function() {
  slideDirection = 2;
  slidePrev();
};

function slideNext() {
  if (imgIndex == thumbs_img.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }
  showSlide();
}

function slidePrev() {
  if (imgIndex > 0) {
    imgIndex--;
  } else {
    imgIndex = thumbs_img.length - 1;
  }
  showSlide();
}

function showSlide() {
  mainImage_img.src = thumbs_img[imgIndex].src;
}