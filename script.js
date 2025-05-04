document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded');
});

const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
