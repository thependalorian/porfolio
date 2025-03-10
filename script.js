/**
 * Personal Portfolio Website
 * Following ACT Brand Guidelines
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initMobileNavigation();
    initScrollEffects();
    initBackToTop();
    updateCopyrightYear();
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu on click outside
    document.addEventListener('click', (e) => {
        if (!menuToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Set active page indicator
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuToggle || !navLinks) return;
    
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Add shadow to header on scroll
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}

/**
 * Scroll Effects - Animate elements when scrolling
 */
function initScrollEffects() {
    // Add animation to elements when they come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.card, .experience-card, .section-header, .hero-content, .profile-wrapper');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.9) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run once on load
    setTimeout(animateOnScroll, 100);
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add scroll highlighting for navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const highlightNavigation = () => {
        const scrollPosition = window.scrollY + 100; // Offset to account for fixed header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };
    
    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Run once on page load
}

/**
 * Back to Top Button
 */
function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (!backToTopButton) return;
    
    // Show/hide button based on scroll position
    const toggleBackToTopButton = () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    };
    
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // Smooth scroll to top when clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Update Copyright Year
 */
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

/**
 * Hamburger Menu Animation
 */
function initHamburgerAnimation() {
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!menuToggle) return;
    
    menuToggle.addEventListener('click', function() {
        const hamburger = this.querySelector('.hamburger');
        if (hamburger) {
            hamburger.classList.toggle('active');
        }
    });
}

// Add CSS for hamburger menu
document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu style
    const hamburgerStyle = document.createElement('style');
    hamburgerStyle.innerHTML = `
        .menu-toggle {
            width: 30px;
            height: 30px;
            position: relative;
            z-index: 200;
        }
        
        .hamburger, .hamburger::before, .hamburger::after {
            content: '';
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: var(--midnight-forest);
            border-radius: 3px;
            transition: all 0.3s ease;
        }
        
        .hamburger {
            top: 50%;
            transform: translateY(-50%);
        }
        
        .hamburger::before {
            top: -8px;
        }
        
        .hamburger::after {
            bottom: -8px;
        }
        
        .hamburger.active {
            background-color: transparent;
        }
        
        .hamburger.active::before {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .hamburger.active::after {
            transform: rotate(-45deg) translate(6px, -6px);
        }
        
        .nav-links a.active {
            color: var(--spring-green);
        }
        
        .nav-links a.active::after {
            width: 80%;
        }
    `;
    document.head.appendChild(hamburgerStyle);
    
    // Initialize hamburger animation
    initHamburgerAnimation();
});

// Add smooth page transitions
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a').forEach(link => {
        if (link.host === window.location.host) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.body.classList.add('fade-out');
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            });
        }
    });
});

// Add fade-in animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
}); 