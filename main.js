window.addEventListener('DOMContentLoaded', function() {
    // Animate progress bar
    const progressBar = document.querySelector('.progress-bar .progress');
    progressBar.style.width = '0%';
    setTimeout(() => {
        progressBar.style.transition = 'width 1s ease';
        progressBar.style.width = '40%';
    }, 500);

    // Animate profile card
    const profileCard = document.querySelector('.profile-card');
    profileCard.style.opacity = '0';
    profileCard.style.transform = 'translateY(20px)';
    setTimeout(() => {
        profileCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        profileCard.style.opacity = '1';
        profileCard.style.transform = 'translateY(0)';
    }, 1000);

    // Animate flag icons
    const flagIcons = document.querySelectorAll('.flags img');
    flagIcons.forEach((icon, index) => {
        icon.style.opacity = '0';
        icon.style.transform = 'translateY(20px)';
        setTimeout(() => {
            icon.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, 1500 + (index * 100));
    });

    // Glitch effect on text
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        element.style.textShadow = '0 0 5px var(--glitch-color)';
        setInterval(() => {
            element.style.textShadow = `${getRandomInt(-5, 5)}px ${getRandomInt(-5, 5)}px 5px var(--glitch-color)`;
        }, 100);
    });

    // Smooth scroll animation
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('.parallax');
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

    // Typing effect for hero content
    const heroContent = document.querySelector('.hero-content');
    const heroText = heroContent.querySelector('p').textContent;
    heroContent.querySelector('p').textContent = '';
    let i = 0;
    function typeWriter() {
        if (i < heroText.length) {
            heroContent.querySelector('p').textContent += heroText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 1500);

    // Animate project items on scroll
    const projectItems = document.querySelectorAll('.project-item');
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    function animateOnScroll() {
        projectItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (itemPosition < windowHeight * 0.8) {
                item.classList.add('animate');
            } else {
                item.classList.remove('animate');
            }
        });
    }

    // Generate random integer
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
