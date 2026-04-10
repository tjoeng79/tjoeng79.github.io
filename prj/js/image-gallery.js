const container = document.querySelector('.container');
const mainImage = document.querySelector('.main-image');
const thumbs =document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
    if (e.target.className == 'thumb'){
        mainImage.src = e.target.src;
        mainImage.classList.add('fade');

        setTimeout(function(){
            mainImage.classList.remove('fade');
        }, 1000);

        thumbs.forEach(function(thumb) {
            thumb.classList.remove('active');
        });

        e.target.classList.add('active');
    }
});