// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = menuButton.querySelector('.menu-open');
    const menuCloseIcon = menuButton.querySelector('.menu-close');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuOpenIcon.classList.toggle('hidden');
        menuCloseIcon.classList.toggle('hidden');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
            menuOpenIcon.classList.remove('hidden');
            menuCloseIcon.classList.add('hidden');
        }
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation on scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            element.classList.add('animate-fadeIn');
        }
    });
});
