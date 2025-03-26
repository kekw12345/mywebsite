// This file contains JavaScript for interactive functionality on the portfolio website.

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const indicator = document.getElementById('indicator');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            updateIndicator(this);
        });
    });

    function updateIndicator(link) {
        const linkRect = link.getBoundingClientRect();
        indicator.style.width = `${linkRect.width}px`;
        indicator.style.transform = `translateX(${linkRect.left}px)`;
    }

    // Initialize the indicator position on page load
    if (navLinks.length > 0) {
        updateIndicator(navLinks[0]);
    }
});