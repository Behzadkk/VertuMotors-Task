// slideshow
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   const slides = document.querySelectorAll(".slideshow__slide");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

// function currentPanel(id) {
//   const panel = document.querySelectorAll(".panel__slide");
//   panel.addEventListener("click", function() {
//     let id = panel.;
//     showPanel(id);
//   });
// }
let id = "dimensions";
showPanel(id);
function showPanel(id) {
  const panelSlide = document.querySelectorAll(".panel__slide");
  for (let i = 0; i < panelSlide.length; i++) {
    panelSlide[i].style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}
