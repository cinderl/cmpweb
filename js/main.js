// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = mobileMenuButton.querySelector('.menu-open');
    const menuCloseIcon = mobileMenuButton.querySelector('.menu-close');

    function toggleMenu() {
        const isMenuOpen = mobileMenu.classList.contains('show');
        
        if (isMenuOpen) {
            // Close menu
            mobileMenu.classList.remove('show');
            mobileMenu.classList.add('hidden');
            menuOpenIcon.classList.remove('hidden');
            menuCloseIcon.classList.add('hidden');
        } else {
            // Open menu
            mobileMenu.classList.remove('hidden');
            mobileMenu.classList.add('show');
            menuOpenIcon.classList.add('hidden');
            menuCloseIcon.classList.remove('hidden');
        }
    }

    // Toggle menu on button click
    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenuButton.contains(event.target) || mobileMenu.contains(event.target);
        if (!isClickInside && mobileMenu.classList.contains('show')) {
            toggleMenu();
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
