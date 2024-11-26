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

const button = document.getElementById('toggleButton');
const description = document.getElementById('description');

button.addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah link dari melakukan navigasi
    description.classList.toggle('max-desc'); // Mengganti class max-desc
    button.textContent = description.classList.contains('max-desc') ? 'Read More' : 'Read Less'; // Mengubah teks button
});


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

sr.reveal('.skills-box', {
    beforeReveal: (el) => {
        const progressBar = el.querySelector('.progress-bar'); // Ambil elemen progress-bar
        const targetWidth = progressBar.getAttribute('data-target'); // Ambil target dari atribut data
        animateProgressBar(progressBar, targetWidth); // Mulai animasi progress bar
    }
});

// Fungsi untuk animasi progress bar
function animateProgressBar(progressBar, targetWidth) {
    let width = 0;
    const tooltip = progressBar.querySelector('.tooltip'); // Ambil elemen tooltip

    const interval = setInterval(() => {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            progressBar.style.width = width + '%';
            tooltip.textContent = width + '%'; // Perbarui teks tooltip
        }
    }, 20); // Sesuaikan kecepatan animasi di sini
}

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
    let number = '+62#############';

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;

     // Validasi input
     if (!name || !email || !phone || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    let url = 'https://wa.me/' + number + '?text=' + 'Name: ' + name + '%0AEmail: ' + email + '%0APhone: ' + phone + '%0ASubject: ' + subject + '%0AMessage: ' + message;

    window.open(url, '_blank').focus();
}

function sendEmail() {
    // email penerima
    let emailRecipient = 'saylihidayatrusdy@gmail.com';  // Ganti dengan email tujuan
 
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
 
    // Validasi input
    if (!name || !email || !phone || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    // Membuat URL mailto dengan parameter untuk subjek dan body
    let url = 'mailto:' + emailRecipient + 
              '?subject=' + encodeURIComponent('Subject: ' + subject) + 
              '&body=' + encodeURIComponent('Name: ' + name + '\n' +
                                            'Email: ' + email + '\n' +
                                            'Phone: ' + phone + '\n' +
                                            'Message:\n' + message);
 
    // Membuka aplikasi email dengan URL mailto
    window.location.href = url;
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     sendEmail();
// });
