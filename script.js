// Simple script for any interactive functionality
// This is a vanilla HTML example, so minimal JavaScript is needed

document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive features here if needed
    console.log('Wistia Embeds Example loaded');
    
    // Example: Handle navigation highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('nav-link-active');
        } else {
            link.classList.remove('nav-link-active');
        }
    });
});

