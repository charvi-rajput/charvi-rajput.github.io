// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    htmlElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
  themeToggle.checked = savedTheme === 'dark';
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.querySelector('.sidebar-overlay');
const navLinks = document.querySelectorAll('.nav-links a');

function toggleMenu() {
  sidebar.classList.toggle('active');
  sidebarOverlay.classList.toggle('active');
  document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMenu);
sidebarOverlay.addEventListener('click', toggleMenu);

// Close menu when clicking a nav link on mobile
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 1024) {
      toggleMenu();
    }
  });
});

// Close menu when resizing window beyond mobile breakpoint
window.addEventListener('resize', () => {
  if (window.innerWidth > 1024 && sidebar.classList.contains('active')) {
    toggleMenu();
  }
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            if (window.innerWidth <= 1024) {
                document.querySelector('.sidebar').classList.remove('active');
                document.querySelector('.menu-toggle').classList.remove('active');
            }
        }
    });
});

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.section');
const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Initialize reveal elements
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease-out';
});

// Add scroll event listener
window.addEventListener('scroll', revealOnScroll);
// Initial check for elements in view
revealOnScroll(); 