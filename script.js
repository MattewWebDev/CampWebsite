let menu = document.querySelector("#menu-icon");
let navList = document.querySelector("#navbar-container");
let slideIndex = 0;

menu.onclick = () => {
  menu.classList.toggle("fa-x");
  navList.classList.toggle("open");
};
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
