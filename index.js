// Select menu icon and navigation menu
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('#nav-list');

// Ensure menu toggle works for tablet view
if (menuIcon && navMenu) {
  menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
    menuIcon.classList.toggle('open'); // Toggle the 'open' class for the menu icon
  });

  // Reset the navigation menu and menu icon on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      navMenu.classList.remove('show'); // Remove 'show' class for larger screens
      menuIcon.classList.remove('open'); // Reset the menu icon state
    }
  });
}

// Resume download button
const downloadResume = document.querySelector("#downloadResume");
if (downloadResume) {
  downloadResume.addEventListener("click", () => {
    window.location.href = "https://drive.google.com/uc?export=download&id=1NcpLqmN7WdGcB1kbQ1lehFv8UMtLXMk_";
  });
}

// Form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      e.preventDefault(); // Prevent form submission
      alert('All fields are required!');
      return;
    }

    if (!validateEmail(email)) {
      e.preventDefault();
      alert('Please enter a valid email address!');
      return;
    }

    alert('Form submitted successfully!');
  });

  // Email validation function
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
