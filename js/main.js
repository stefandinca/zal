/**
 * ZAL Website - Main JavaScript
 * Handles mobile menu toggle and scroll animations
 */

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Mobile Proiecte Dropdown Toggle
    const proiecteToggle = document.getElementById('mobile-proiecte-toggle');
    const proiecteMenu = document.getElementById('mobile-proiecte-menu');
    const proiecteIcon = document.getElementById('mobile-proiecte-icon');

    if (proiecteToggle && proiecteMenu && proiecteIcon) {
        proiecteToggle.addEventListener('click', function() {
            proiecteMenu.classList.toggle('hidden');
            proiecteIcon.classList.toggle('rotate-180');
        });
    }
});

// Scroll Reveal Animation using IntersectionObserver
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all elements with .reveal class
document.addEventListener('DOMContentLoaded', function() {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(function(element) {
        observer.observe(element);
    });
});

// Active Menu State on Scroll (Scroll Spy)
function initScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    if (sections.length === 0 || navLinks.length === 0) return;

    function scrollActive() {
        const scrollY = window.pageYOffset;

        sections.forEach(function(current) {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 150;
            const sectionId = current.getAttribute("id");

            const navLink = document.querySelector('.nav-link[href*="#' + sectionId + '"]');

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active-link");
                } else {
                    navLink.classList.remove("active-link");
                }
            }
        });
    }

    window.addEventListener("scroll", scrollActive);
}

document.addEventListener('DOMContentLoaded', initScrollSpy);
