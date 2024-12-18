/*
  Related HTML files: Efemeria.html, TheLeakyCauldron.html, TheWolfPit.html
  
  Description: 
    This file contains the scripts to handle interactive elements such as:
    Map pop out, Menu pop out, and photo gallery
*/

// Map Modal functionality
const mapModal = document.getElementById('map-modal');
const addressCard = document.getElementById('address-card');
const closeBtn = document.querySelector('.close-btn');

// When the address card is clicked, show the map modal
addressCard.addEventListener('click', () => {
    mapModal.style.display = 'flex';
});

// When the close button is clicked, hide the map modal
closeBtn.addEventListener('click', () => {
    mapModal.style.display = 'none';
});

// Close the map modal if the user clicks outside the modal
window.addEventListener('click', (event) => {
    if (event.target === mapModal) {
        mapModal.style.display = 'none'; 
    }
});

// Menu Modal functionality
const menuCard = document.getElementById("menu-card");
const menuModal = document.getElementById("menu-modal");
const closeMenuModal = document.getElementById("close-menu-modal"); 

// When the menu card is clicked, show the menu modal
menuCard.addEventListener("click", () => {
    menuModal.style.display = "flex"; 
});

// When the close button is clicked, hide the menu modal
closeMenuModal.addEventListener("click", () => {
    menuModal.style.display = "none"; 
});

// Close the menu modal if the user clicks outside the modal
window.addEventListener("click", (event) => {
    if (event.target === menuModal) {
        menuModal.style.display = "none"; 
    }
});

// Photo Gallery (Lightbox) functionality
const galleryImages = document.querySelectorAll('.gallery-image');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImage = document.getElementById('lightbox-image');
const closeLightboxModal = document.getElementById('close-lightbox-modal');

// When any gallery image is clicked, open the lightbox modal and display the clicked image
galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        lightboxModal.style.display = 'flex'; 
        lightboxImage.src = image.src; 
    });
});

// When the close button is clicked, hide the lightbox modal
closeLightboxModal.addEventListener('click', () => {
    lightboxModal.style.display = 'none';
});

// Close the lightbox modal if the user clicks outside the modal
window.addEventListener('click', (event) => {
    if (event.target === lightboxModal) {
        lightboxModal.style.display = 'none'; 
    }
});

// Gallery Popup functionality
let currentSlideIndex = 0;  // Variable to track the current slide (image) in the gallery popup

// Opens the gallery popup and displays the current image
function openGalleryPopup() {
    document.getElementById("gallery-popup").style.display = "flex";
    showSlide(currentSlideIndex);
}

// Closes the gallery popup
function closeGalleryPopup() {
    document.getElementById("gallery-popup").style.display = "none";
}

// Changes the slide (image) in the gallery popup based on the direction (-1 for previous, 1 for next)
function changeSlide(direction) {
    const images = document.querySelectorAll(".carousel-image");
    images[currentSlideIndex].classList.remove("active");
    currentSlideIndex = (currentSlideIndex + direction + images.length) % images.length;
    images[currentSlideIndex].classList.add("active");
}

// Shows the slide (image) corresponding to the given index
function showSlide(index) {
    const images = document.querySelectorAll(".carousel-image");
    images.forEach((image, i) => {
        image.classList.toggle("active", i === index);
    });
}

// Event listeners for gallery popup actions
document.querySelector(".close-gallery-popup").addEventListener("click", closeGalleryPopup);
document.querySelector(".prev-arrow").addEventListener("click", () => changeSlide(-1));
document.querySelector(".next-arrow").addEventListener("click", () => changeSlide(1));
