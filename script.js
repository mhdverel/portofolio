// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close mobile menu on click
    const menu = document.getElementById('menu');
    if (!menu.classList.contains('hidden') && window.innerWidth < 768) {
      menu.classList.add('hidden');
    }
  });
});

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

// Initialize AOS using window.onload to ensure resources are ready
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

// Back to Top Button Logic
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('translate-y-20', 'opacity-0');
  } else {
    backToTopBtn.classList.add('translate-y-20', 'opacity-0');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Spy (Active Navbar Link)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('text-blue-400');
    link.classList.add('text-gray-400');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('text-blue-400');
      link.classList.remove('text-gray-400');
    }
  });
});
