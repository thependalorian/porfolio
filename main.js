/**
 * Main JavaScript file for George Nekwaya's Portfolio
 * Author: UI/UX-Focused Full-Stack Web Developer
 * Version: 1.0.0
 */

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    initializeMobileNav();
    
    // Scroll Reveal
    initializeScrollReveal();
    
    // Flag Display
    initializeFlagDisplay();
    
    // Video Lazy Loading
    initializeVideoLazyLoad();
    
    // Smooth Scrolling
    initializeSmoothScroll();
    
    // External Links
    initializeExternalLinks();
    
    // Accessibility
    initializeAccessibility();
});

// Break out functions for better organization
function initializeMobileNav() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
}

function initializeScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-item');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - revealPoint) {
                item.classList.add('revealed');
            }
        });
    };
    
    revealOnScroll(); // Initial check
    window.addEventListener('scroll', revealOnScroll);
}

// Fix video lazy loading implementation
function initializeVideoLazyLoad() {
    const videoContainers = document.querySelectorAll('.video-container');
    
    if (!('IntersectionObserver' in window) || !videoContainers.length) return;
    
    const videoObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target.querySelector('iframe');
                    if (iframe?.dataset.src) {
                        iframe.src = iframe.dataset.src;
                        observer.unobserve(entry.target);
                    }
                }
            });
        },
        {
            rootMargin: '100px 0px',
            threshold: 0.1
        }
    );
    
    videoContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (iframe?.src) {
            iframe.dataset.src = iframe.src;
            iframe.removeAttribute('src');
            videoObserver.observe(container);
        }
    });
}

// Other functions remain the same but with consistent spacing and organization

function initializeFlagDisplay() {
    const flagDisplay = document.querySelector('.flag-display');
    if (flagDisplay) {
        const visitedCountries = [
            { name: 'Namibia', code: 'NA' },
            { name: 'Tanzania', code: 'TZ' },
            { name: 'Zambia', code: 'ZM' },
            { name: 'Dubai', code: 'AE' },
            { name: 'Israel', code: 'IL' },
            { name: 'India', code: 'IN' },
            { name: 'South Africa', code: 'ZA' },
            { name: 'Germany', code: 'DE' },
            { name: 'Indonesia', code: 'ID' },
            { name: 'Malaysia', code: 'MY' },
            { name: 'USA', code: 'US' }
        ];
        
        visitedCountries.forEach(country => {
            const flagItem = document.createElement('div');
            flagItem.className = 'flag-item';
            flagItem.setAttribute('title', country.name);
            
            const flagImg = document.createElement('img');
            flagImg.src = `https://flagcdn.com/w80/${country.code.toLowerCase()}.png`;
            flagImg.alt = `${country.name} flag`;
            flagImg.loading = 'lazy';
            
            flagItem.appendChild(flagImg);
            flagDisplay.appendChild(flagItem);
        });
    }
}

function initializeSmoothScroll() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for fixed header
                    behavior: 'smooth'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
}

function initializeExternalLinks() {
    // Handle external links
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        // Add rel="noopener noreferrer" for security if not already present
        if (!link.getAttribute('rel') || !link.getAttribute('rel').includes('noopener')) {
            const rel = link.getAttribute('rel') || '';
            link.setAttribute('rel', `${rel} noopener noreferrer`.trim());
        }
        
        // Add visual indicator for external links (optional)
        if (!link.querySelector('.external-link-icon')) {
            const icon = document.createElement('span');
            icon.className = 'external-link-icon';
            icon.innerHTML = ' ↗';
            icon.style.fontSize = '0.75em';
            icon.style.verticalAlign = 'super';
            link.appendChild(icon);
        }
    });
}

function initializeAccessibility() {
    // Accessible focus management
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
    document.addEventListener('keydown', function(e) {
        // Add focus styles when using keyboard navigation
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });
    
    // Remove focus styles when using mouse
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('user-is-tabbing');
    });
}