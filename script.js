// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.setAttribute('data-theme', savedTheme);
    themeToggle.checked = savedTheme === 'dark';
}

// Handle theme toggle
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Handle mobile menu for smaller screens
const createMobileMenu = () => {
    const sidebar = document.querySelector('.sidebar');
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-toggle');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(menuButton);

    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        menuButton.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!sidebar.contains(e.target) && !menuButton.contains(e.target)) {
            sidebar.classList.remove('active');
            menuButton.classList.remove('active');
        }
    });
};

// Add mobile menu for screens smaller than 1024px
if (window.innerWidth <= 1024) {
    createMobileMenu();
}

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