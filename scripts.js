// JavaScript for portfolio beta 3

// Navbar functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get all the sections and navigation links
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach((section) => {
            section.style.display = "none";
        });
    }

    // Function to show a specific section
    function showSection(id) {
        hideAllSections();
        document.querySelector(id).style.display = "block";
    }

    // Add event listeners to navigation links
    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = this.getAttribute("href");
            showSection(targetSection);

            // Update the active link
            navLinks.forEach((link) => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Initially display the home section
    showSection("#home");
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    // Hide all slides
    slides.forEach((slide) => slide.style.display = "none");

    // Increment slideIndex
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }

    // Display the current slide and add active class to corresponding dot
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade');

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

// Show current slide based on dot click
function currentSlide(n) {
    let i;
    const slides = document.querySelectorAll(".mySlides");
    const dots = document.querySelectorAll(".dot");

    // Hide all slides and remove active class from dots
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        dots[index].classList.remove("active");
    });

    // Set slideIndex to the clicked dot index and display the slide
    slideIndex = n;
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add('fade');
    dots[slideIndex - 1].classList.add("active");
}

// Contact form functionality
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent. Thank you!");
    this.reset();
});
