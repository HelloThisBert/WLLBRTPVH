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

document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Cek apakah ada preferensi tema yang tersimpan
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Terapkan tema yang tersimpan jika ada
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    }
    
    // Tambahkan event listener untuk toggle dark mode
    darkModeToggle.addEventListener('click', function() {
      // Toggle class dark-mode pada body
      document.body.classList.toggle('dark-mode');
      
      // Simpan preferensi tema di localStorage
      const isDarkModeEnabled = document.body.classList.contains('dark-mode');
      localStorage.setItem('darkMode', isDarkModeEnabled);
    });
  });