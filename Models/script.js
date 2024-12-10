document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Function to toggle dropdown visibility with animation
  function toggleDropdown() {
    if (dropdownContent.style.maxHeight) {
      dropdownContent.style.maxHeight = null; // Collapse the dropdown
      dropdownContent.style.opacity = '0'; // Fade out
    } else {
      dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px'; // Expand the dropdown
      dropdownContent.style.opacity = '1'; // Fade in
    }
  }

  // Add click event to dropdown
  dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropdown();
  });

  // Optional: Close the dropdown if clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownContent.style.maxHeight = null;
      dropdownContent.style.opacity = '0';
    }
  });
});


// Back to Top Button functionality
const backToTopButton = document.createElement('button');
backToTopButton.innerText = "↑ Back to Top";
backToTopButton.id = "back-to-top";
document.body.appendChild(backToTopButton);

backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.padding = "10px 15px";
backToTopButton.style.backgroundColor = "#224224";
backToTopButton.style.color = "#fff";
backToTopButton.style.border = "none";
backToTopButton.style.borderRadius = "5px";
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
});