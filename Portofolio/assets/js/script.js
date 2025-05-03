// Get all navigation links
const navLinks = document.querySelectorAll('nav ul li a');

// Add click event to each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(item => item.classList.remove('active'));
        // Add active class to clicked link
        this.classList.add('active');
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navlist = document.querySelector('nav ul');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};