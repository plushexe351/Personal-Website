const developerName = document.getElementById('developer-name');
const header = document.querySelector('header');
const hamburg = document.querySelector('.hamburg');
const nav = document.querySelector('header nav');
const navLinks = document.querySelector('.nav-items')

developerName.onclick = () => window.location.reload();
hamburg.addEventListener('click', () => {
    header.classList.toggle('active');
})

var typed = new Typed('.role', {
    strings: ["UI/UX Designer", "Frontend Developer"],
    typeSpeed: 60,
    backspeed: 150,
    loop: true
});

