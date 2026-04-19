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