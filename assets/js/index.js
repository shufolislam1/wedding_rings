document.addEventListener("DOMContentLoaded", function() {
    var fullImgCard = document.querySelector('.full-img-card');
    var afterClick = document.querySelector('.after-click');
    var beforeClick = document.querySelector('.before-click');

    fullImgCard.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        afterClick.style.display = 'block';
        beforeClick.style.display = 'none';
    });
});