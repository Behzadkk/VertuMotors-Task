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

// COLORS
const colorSelectors = document.querySelectorAll(".colors__selector");
for (let i = 0; i < colorSelectors.length; i++) {
  photoListener(colorSelectors[i]);
}
//Initial Color
displayedSwatch(colorSelectors[2]);

//Event Listener
function photoListener(item) {
  item.addEventListener("click", function() {
    displayedSwatch(item);
  });
}
// Color Callbacks
function displayedSwatch(swatch) {
  isActive(swatch, "colors__selector--is-selected");
  showPhoto(swatch.hash);
}

// Car's Photo
function showPhoto(id) {
  const carPhoto = document.querySelector(id);
  const slides = document.querySelectorAll(".colors__slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  carPhoto.style.display = "block";
}
// Active

function isActive(item, selectionClass) {
  const selectedColor = document.getElementsByClassName(selectionClass);
  for (let i = 0; i < selectedColor.length; i++) {
    selectedColor[i].className = selectedColor[i].className.replace(
      selectionClass,
      ""
    );
  }
  item.className += " " + selectionClass;
}
