//slideshow;
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slideshow__slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// panels
const panelSelector = document.querySelectorAll(".panel__selector");
for (let i = 0; i < panelSelector.length; i++) {
  slideListener(panelSelector[i]);
}

// Initial panel
displaySlide(panelSelector[0]);

// Panel Event listener
function slideListener(item) {
  item.addEventListener("click", function() {
    displaySlide(item);
  });
}

// panel callbacks
function displaySlide(item) {
  isActive(item, "panel__selector--active");
  showSlide(item.hash, "panel__slide");
}

// COLORS
const colorSelectors = document.querySelectorAll(".colors__selector");
for (let i = 0; i < colorSelectors.length; i++) {
  photoListener(colorSelectors[i]);
}
//Initial Color
displayedSwatch(colorSelectors[2]);

//Colors Event Listener
function photoListener(item) {
  item.addEventListener("click", function() {
    displayedSwatch(item);
  });
}
// Colors Callbacks
function displayedSwatch(swatch) {
  isActive(swatch, "colors__selector--is-selected");
  showSlide(swatch.hash, "colors__slide");
  activeOption(swatch, "nav__header--active-option");
}

// Show selected slide
function showSlide(id, slidesClassName) {
  const toShowSlide = document.querySelector(id);
  const slides = document.getElementsByClassName(slidesClassName);
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  toShowSlide.style.display = "block";
}

// Active Selector
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

function activeOption(item, selectedOptinClass) {
  const colorOption = item.parentElement.parentElement;
  const colorHeading = colorOption.getElementsByTagName("a")[0];
  isActive(colorHeading, selectedOptinClass);
}
