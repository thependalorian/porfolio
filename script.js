/ Particle effect initialization
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor(x, y, size, color, weight) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.weight = weight;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.closePath();
    ctx.fill();
  }

  update() {
    this.y += this.weight;
    this.weight += 0.2;
    if (this.y > canvas.height - this.size) {
      this.weight *= -0.6;
    }
    this.draw();
  }
}

function init() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    let size = Math.random() * 5 + 1;
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    let color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`; // Random neon color
    let weight = 1;
    particlesArray.push(new Particle(x, y, size, color, weight));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
  }
  requestAnimationFrame(animate);
}

init();
animate();

// Responsive Canvas Resize
window.addEventListener('resize', function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

// Modal functionality for inventory items
const modal = document.getElementById('inventoryModal');
const modalImg = document.getElementById('modalImage');
const inventoryItems = document.querySelectorAll('.inventory-item img');
const closeBtn = document.querySelector('.close');

inventoryItems.forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
    });
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Update Progress Bars
function updateProgressBars() {
    const ageProgress = document.getElementById('ageProgress');
    const agePercentage = document.getElementById('agePercentage');
    const age = 33; // Example age
    const maxAge = 100; // Example max age
    const ageProgressPercentage = (age / maxAge) * 100;
    ageProgress.style.width = `${ageProgressPercentage}%`;
    agePercentage.textContent = `${ageProgressPercentage.toFixed(2)}%`;
}

updateProgressBars();

// Hero Title Hover Effect
const heroTitle = document.getElementById('heroTitle');
const japaneseName = 'Seishin no Yūsha (征信之勇者)';

heroTitle.addEventListener('mouseover', function() {
    this.textContent = japaneseName;
});

heroTitle.addEventListener('mouseout', function() {
    this.textContent = 'Hero';
});
