function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides.length)
    console.log(n)
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// function auto_show(){
//     showSlides(slideIndex += 1)
// }
// setInterval(auto_show, 5000);

let slideIndex = 1;
showSlides(slideIndex);
