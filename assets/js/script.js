const header = document.getElementById("header");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("search-box");
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenu = document.getElementById("close-menu");
const heroImages = document.querySelectorAll(".hero-image");
let currentImageIndex = 0;

// Image carousel functionality
function changeHeroImage() {
  heroImages[currentImageIndex].classList.remove("opacity-100");
  heroImages[currentImageIndex].classList.add("opacity-0");

  currentImageIndex = (currentImageIndex + 1) % heroImages.length;
  heroImages[currentImageIndex].classList.remove("opacity-0");
  heroImages[currentImageIndex].classList.add("opacity-100");
}

setInterval(changeHeroImage, 6000); // Change image every 6 seconds

// Add scroll effect to header
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("bg-gray-900", "shadow-md");
    header.classList.remove("bg-transparent");
  } else {
    header.classList.remove("bg-gray-900", "shadow-md");
    header.classList.add("bg-transparent");
  }
});

// Toggle search box
searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("opacity-100");
  searchBox.classList.toggle("pointer-events-auto");
  searchBox.classList.toggle("top-20");
});

// Close search box when clicking outside of it
document.addEventListener("click", (event) => {
  const isClickInsideSearchBox = searchBox.contains(event.target);
  const isClickOnSearchIcon = searchIcon.contains(event.target);

  if (!isClickInsideSearchBox && !isClickOnSearchIcon) {
    searchBox.classList.remove("opacity-100", "pointer-events-auto", "top-20");
  }
});

// Toggle mobile menu
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
});

closeMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-x-full");
});




// Get references to the elements
const sortButton = document.getElementById('sortButton');
const sortOptions = document.getElementById('sortOptions');
const filterButton = document.getElementById('filterButton');
const filterOptions = document.getElementById('filterOptions');

// Add click event listener to the sort button
sortButton.addEventListener('click', () => {
  // Toggle the visibility of the dropdown menu
  sortOptions.classList.toggle('show_sort');
});
// Add click event listener to the sort button
filterButton.addEventListener('click', () => {
  // Toggle the visibility of the dropdown menu
  filterOptions.classList.toggle('show_filter');
});


