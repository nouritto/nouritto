// Navbar scroll effect

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu

const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

// Close menu when clicking outside

document.addEventListener('click', (e) => {

    const clickedInsideMenu = mobileMenu.contains(e.target);
    const clickedMenuBtn = menuBtn.contains(e.target);

    if (!clickedInsideMenu && !clickedMenuBtn) {
        mobileMenu.classList.remove('show');
    }
});

// Close menu after clicking links

const mobileLinks = mobileMenu.querySelectorAll('a');

mobileLinks.forEach(link => {

    link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
    });
});

// Reveal animation

const reveals = document.querySelectorAll('.reveal');

function revealSections() {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120) {
            section.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealSections);
revealSections();

// Active navbar links

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {

    let current = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if(link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Expand image

const imageFrame = document.querySelector('.image-frame');
const imageModal = document.getElementById('imageModal');

imageFrame.addEventListener('click', () => {
    imageModal.classList.add('show');
});

imageModal.addEventListener('click', () => {
    imageModal.classList.remove('show');
});
