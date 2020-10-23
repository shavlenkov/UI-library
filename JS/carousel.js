let slide_number = 1;

showSlide(slide_number);

let button_prev = document.querySelector("a.prev").onclick = prevSlide;
let button_next = document.querySelector("a.next").onclick = nextSlide;

function prevSlide() {
  showSlide(slide_number -= 1);
}

function nextSlide() {
  showSlide(slide_number += 1);
}

function showSlide(number) {

  let slides = document.getElementsByClassName("carousel-item");

  if (number < 1) {
    slide_number = slides.length;
  }

  if (number > slides.length) {
    slide_number = 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slide_number - 1].style.display = "block";

}