// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');

    // Smooth scrolling effect
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Semua kolom harus diisi!');
        } else if (!validateEmail(email)) {
            alert('Masukkan alamat email yang valid!');
        } else {
            alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
            contactForm.reset();
        }
    });

    // Email validation helper
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Back to top button
    const backToTop = document.createElement('button');
    backToTop.textContent = '↑';
    backToTop.id = 'backToTop';
    document.body.appendChild(backToTop);

    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.padding = '10px';
    backToTop.style.background = '#6a11cb';
    backToTop.style.color = 'white';
    backToTop.style.border = 'none';
    backToTop.style.borderRadius = '50%';
    backToTop.style.cursor = 'pointer';
    backToTop.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
