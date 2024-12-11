document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Toggle dropdown visibility
  function toggleDropdown() {
    dropdownContent.classList.toggle('visible');
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownContent.classList.remove('visible');
    }
  });

  // Handle Back to Top button creation
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
      
      // Force reset dropdown visibility when scrolling up
      dropdownContent.classList.remove('visible');
    }
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dropdownContent.classList.remove('visible');
  });

  // Dropdown click listener
  dropdown.querySelector('.dropbtn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropdown();
  });
});