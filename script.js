// JavaScript to handle section visibility and animations

// Get all the navigation links and sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Function to trigger animations on section
function activateSection(section) {
    section.classList.add('active');
}

// Function to reset section (remove animation)
function resetSection(section) {
    section.classList.remove('active');
}

// Add event listeners for navigation link clicks
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target section ID from the href of the link
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add the "active" class to the target section to trigger the animation
        sections.forEach(section => {
            resetSection(section); // Reset all sections
        });
        activateSection(targetSection); // Trigger animation for clicked section
    });
});

// Trigger animation when page loads by adding "active" class to the first section
document.addEventListener('DOMContentLoaded', () => {
    const firstSection = document.getElementById('home');
    activateSection(firstSection);
});

// Add an event listener for scroll to add 'active' to sections that come into view
window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            if (!section.classList.contains('active')) {
                activateSection(section); // Add the active class when the section is in view
            }
        } else {
            if (section.classList.contains('active')) {
                resetSection(section); // Optionally reset the animation when the section is out of view
            }
        }
    });
});
