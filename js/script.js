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
    reset: true,
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
sr.reveal('form', {origin: 'bottom'});

// typadd.js
var typed = new Typed('.typing', {
    strings: ['Programmer', 'Web Developer', 'Data Scientist', 'ML Engineer', 'DL Engineer'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


// contact form
const scriptURL = 'https://script.google.com/macros/s/AKf ... 6/exec'
const form = document.forms['submit-to-google-sheet']
//name, email, mobile number, email subject, message
const name = document.getElementById('name');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => alert("Message sent successfully!"))
        .catch(error => console.error('Error!', error.message))
})

// contact form validation
function validateForm() {
    var x = document.forms["submit-to-google-sheet"]["name"].value;
    var y = document.forms["submit-to-google-sheet"]["email"].value;
    var z = document.forms["submit-to-google-sheet"]["mobile"].value;
    var a = document.forms["submit-to-google-sheet"]["subject"].value;
    var b = document.forms["submit-to-google-sheet"]["message"].value;
    if (x == "" || y == "" || z == "" || a == "" || b == "") {
        alert("All fields must be filled out");
        return false;
    }
}
