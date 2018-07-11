// Slider

var numberSlide = 0;

function slider() {
    var slide;
    var slides = document.getElementsByClassName("slider__slide");
    for (slide = 0; slide < slides.length; slide++) {
        slides[slide].style.display = "none";
    }
    numberSlide++;
    if (numberSlide > slides.length) {
        numberSlide = 1
    }
    slides[numberSlide - 1].style.display = "block";
    setTimeout(slider, 3000);
}