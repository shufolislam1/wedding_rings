document.addEventListener("DOMContentLoaded", function() {
    var fullImgCard = document.querySelector('.full-img-card');
    var afterClick = document.querySelector('.after-click');
    var h1 = document.querySelector('.text');
    var triangle = document.querySelector('.triangle')

    fullImgCard.addEventListener('click', function(event) {
        event.preventDefault();
        afterClick.style.display = 'block';
        h1.style.display = 'none';
        triangle.style.display = 'none';
    });
});