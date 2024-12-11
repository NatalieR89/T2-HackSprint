document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = document.querySelector('.dropdown-content');

  // Toggle dropdown visibility
  function toggleDropdown() {
    dropdownContent.classList.toggle('visible');
  }

  // Handle clicking the dropdown button
  dropdown.querySelector('.dropbtn').addEventListener('click', (e) => {
    e.preventDefault();
    toggleDropdown();
  });


  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdownContent.classList.remove('visible');
    }
  });

  // Back to Top button logic
  const backToTopButton = document.createElement('button');
  backToTopButton.innerText = '↑ Back to Top';
  backToTopButton.id = 'back-to-top';
  document.body.appendChild(backToTopButton);

  backToTopButton.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #224224;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
  `;

   // Show/hide Back-to-Top button based on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Back to top logic with dropdown reset
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Allow time for scroll effect and ensure dropdown resets properly
    setTimeout(() => {
      dropdownContent.classList.remove('visible');
    }, 300);
  });

  // Ensure clicking a dropdown restores visibility properly
  function restoreDropdownOnPageFocus() {
    dropdownContent.classList.remove('visible');
  }

  window.addEventListener('focus', restoreDropdownOnPageFocus);
});