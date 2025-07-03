document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });

    // Scroll Animations
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Mobile Menu
    const mobileMenu = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const contactForm = document.getElementById('contact-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            contactForm.style.display = 'none';
            confirmationMessage.style.display = 'block';
        });
    }


    // Appointment Form Submission
    const appointmentForm = document.getElementById('appointment-form');
    const appointmentConfirmation = document.getElementById('appointment-confirmation');

    if (appointmentForm && appointmentConfirmation) {
        appointmentForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from submitting and reloading the page
            appointmentForm.style.display = 'none';
            appointmentConfirmation.style.display = 'block';
        });
    }

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // A bit more for mobile nav styling if needed
        if (navLinks.classList.contains('active')) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '60px';
            navLinks.style.right = '20px';
            navLinks.style.background = 'var(--card-background)';
            navLinks.style.padding = '1rem';
            navLinks.style.borderRadius = '10px';
            navLinks.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
        } else {
            navLinks.style.display = 'none';
        }
    });
});
