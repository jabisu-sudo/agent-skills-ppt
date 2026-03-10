// Slides Engine
let currentSlide = 0;
let slides = [];

async function init() {
  const res = await fetch('data/slides.json');
  const data = await res.json();
  slides = data.slides;
  
  document.getElementById('title').textContent = data.title;
  document.getElementById('subtitle').textContent = data.subtitle;
  
  renderNav();
  goToSlide(0);
}

function renderNav() {
  const nav = document.querySelector('.nav');
  nav.innerHTML = slides.map((_, i) => 
    `<div class="nav-dot${i === 0 ? ' active' : ''}" onclick="goToSlide(${i})"></div>`
  ).join('');
}

function goToSlide(n) {
  if (n < 0 || n >= slides.length) return;
  
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-dot').forEach(d => d.classList.remove('active'));
  
  document.querySelectorAll('.slide')[n].classList.add('active');
  document.querySelectorAll('.nav-dot')[n].classList.add('active');
  document.getElementById('cur').textContent = n + 1;
  document.getElementById('total').textContent = slides.length;
  
  currentSlide = n;
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === ' ') goToSlide(currentSlide + 1);
  if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
});

document.addEventListener('DOMContentLoaded', init);
