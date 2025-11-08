document.getElementById("year").textContent = new Date().getFullYear();

// ================== ANIMAÇÕES AO ROLAR ==================
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

// Observa elementos principais
document.querySelectorAll(
  '.hero-content, .feature, .card, .membro, .sobre, .funcionalidades, .footer'
).forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});


// ================== ANIMAÇÃO DO LOGO ==================
const logo = document.querySelector('.logo img');
if (logo) {
  logo.style.transition = 'transform 1s ease';
  logo.addEventListener('mouseenter', () => logo.style.transform = 'rotate(10deg) scale(1.1)');
  logo.addEventListener('mouseleave', () => logo.style.transform = 'rotate(0) scale(1)');
}

// ================== ANIMAÇÃO DO NAVBAR AO SCROLL ==================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba( #a8dac8, #b9e9d9, #b2e4d4 0.95)';
    navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    navbar.style.transition = '0.4s ease';
  } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.boxShadow = 'none';
  }
});

const plane = document.getElementById('plane');
const path = document.getElementById('flightPath');
const pathLength = path.getTotalLength();

function animatePlane(timestamp) {
  const startTime = animatePlane.startTime || timestamp;
  animatePlane.startTime = startTime;

  let progress = ((timestamp - startTime) % 4000) / 4000; // 4s por ciclo
  const point = path.getPointAtLength(pathLength * progress);

  plane.setAttribute('transform', `translate(${point.x},${point.y})`);

  requestAnimationFrame(animatePlane);
}

requestAnimationFrame(animatePlane);

