const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
}

function changeSlide(direction, sliderId) {
    const slides = document.querySelector(`#${sliderId} .slides`);
    const totalImages = slides.children.length;
    let currentSlide = parseInt(slides.getAttribute('data-current-slide')) || 0;
    
    // Update the current slide based on direction
    currentSlide = (currentSlide + direction + totalImages) % totalImages;
    slides.setAttribute('data-current-slide', currentSlide);
    
    // Move the slider to the correct position
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Bind the buttons with the correct sliderId
document.querySelectorAll('.project-item').forEach((item, index) => {
    const sliderId = `slider-${index + 1}`; // Unique ID for each slider

    // Add event listeners to the buttons
    item.querySelector('.prev').addEventListener('click', () => changeSlide(-1, sliderId));
    item.querySelector('.next').addEventListener('click', () => changeSlide(1, sliderId));
});
