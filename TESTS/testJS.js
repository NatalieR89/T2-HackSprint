document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = dropdown.querySelector('.dropdown-content');
  
  // Toggle dropdown visibility
  dropdown.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target)) {
      dropdownContent.classList.remove('show');
    }
  });
});
