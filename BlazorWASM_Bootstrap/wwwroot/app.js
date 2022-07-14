function startCarousel(carousellId) {
    var myCarousel = document.getElementById(carousellId);
    var carousel = new bootstrap.Carousel(myCarousel);
    carousel.cycle();
}