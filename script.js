// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// ===== Navbar Background on Scroll =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
  }
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavOnScroll() {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.style.color = '#2563eb';
          link.style.background = '#f1f5f9';
        } else {
          link.style.color = '';
          link.style.background = '';
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNavOnScroll);

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  
  // Here you would typically send this to a backend or service like:
  // - Formspree ([formspree.io](https://formspree.io)
  // - EmailJS ([emailjs.com](https://www.emailjs.com)
  // - Netlify Forms
  // - Your own backend API
  
  // For now, we'll show a success message
  alert('Thank you for your message! I will get back to you soon.');
  contactForm.reset();
});

// ===== Smooth Reveal Animation on Scroll =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply animation to elements
document.querySelectorAll('.project-card, .cert-card, .timeline-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== Typing Effect for Hero (Optional Enhancement) =====
// Uncomment the code below if you want a typing effect for the hero title

/*
const heroTitle = document.querySelector('.hero-title');
const titles = ['MCA Final Year Student', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[titleIndex];
  
  if (isDeleting) {
    heroTitle.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
  } else {
    heroTitle.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
  }
  
  let typeSpeed = isDeleting ? 50 : 100;
  
  if (!isDeleting && charIndex === currentTitle.length) {
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    typeSpeed = 500; // Pause before new word
  }
  
  setTimeout(typeEffect, typeSpeed);
}

// Start typing effect
typeEffect();
*/
