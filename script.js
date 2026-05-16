// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.remove('fa-times');
        hamburger.querySelector('i').classList.add('fa-bars');
    });
});

// Active nav link based on current page or scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

// Set active based on URL
const currentPath = window.location.pathname.split('/').pop() || 'index.html';
navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPath) {
        item.classList.add('active');
    } else if (currentPath === '' && href === 'index.html') {
        item.classList.add('active');
    } else {
        item.classList.remove('active');
    }
});

// We can still keep scroll logic for sections if needed, but for multi-page it's better to just highlight based on URL.

// Navbar background effect on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        header.style.background = 'var(--glass-bg)';
        header.style.boxShadow = 'none';
    }
});

// Form submission (prevent default for demo)
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button');
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Sent! <i class="fas fa-check"></i>';
    btn.style.background = 'var(--primary-green)';
    btn.style.color = '#000';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        form.reset();
    }, 3000);
});
