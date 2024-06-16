let menuIcon = document.querySelector('#menu');
let nav = document.querySelector('header .navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

// Add event listener to each nav link
window.onscroll = () => {
    sections.forEach(section => {
        let top = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (pageYOffset >= top && pageYOffset < top + height) {
            navLinks.forEach(a => {
                a.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    nav.classList.remove('active');
};


// ScrollReveal Animation
const sr = ScrollReveal({
    reset: false,
    delay: 200,
    origin: 'top',
    distance: '80px',
    duration: 2000,
});

// Scroll Home
sr.reveal('.home', {origin: 'top'});
sr.reveal('.home-img', {origin: 'bottom'});
sr.reveal('.about', {origin: 'left'});
sr.reveal('.about-img', {origin: 'right'});
sr.reveal('.heading', {origin: 'top'});
sr.reveal('.skills', {origin: 'top'});
sr.reveal('.skills-content', {origin: 'bottom'});
sr.reveal('.projects-content', {origin: 'bottom'});
sr.reveal('.service-box', {origin: 'bottom'});
sr.reveal('.timeline', {origin: 'bottom'});
sr.reveal('.timeline-box', {origin: 'bottom'});
sr.reveal('form', {origin: 'bottom'});

// typadd.js
var typed = new Typed('.typing', {
    strings: ['Programmer', 'Web Developer', 'Data Scientist', 'ML Engineer', 'DL Engineer', 'FreeLancer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// contact form
function sendWhastapp() {
    // phone number
    let number = '+6285883415570';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

    let url = 'https://wa.me/' + number + '?text=' + 'Name: ' + name + '%0AEmail: ' + email + '%0APhone: ' + phone + '%0ASubject: ' + subject + '%0AMessage: ' + message;

    window.open(url, '_blank').focus();
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     sendEmail();
// });
