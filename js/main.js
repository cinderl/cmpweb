// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    function toggleMenu(event) {
        event.stopPropagation(); // Prevent event from bubbling up
        mobileMenu.classList.toggle('hidden');
        
        // Toggle the menu icons
        const menuOpen = mobileMenuButton.querySelector('.menu-open');
        const menuClose = mobileMenuButton.querySelector('.menu-close');
        menuOpen.classList.toggle('hidden');
        menuClose.classList.toggle('hidden');
    }

    // Toggle menu on button click
    mobileMenuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenuButton.querySelector('.menu-open').classList.remove('hidden');
            mobileMenuButton.querySelector('.menu-close').classList.add('hidden');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.querySelector('.menu-open').classList.remove('hidden');
                mobileMenuButton.querySelector('.menu-close').classList.add('hidden');
            }
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
