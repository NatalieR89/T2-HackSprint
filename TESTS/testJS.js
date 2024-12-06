// testJS.js
document.addEventListener('DOMContentLoaded', () => {
  const dropBtn = document.querySelector('.dropbtn');
  const dropdownContent = document.querySelector('.dropdown-content');

  dropBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    dropdownContent.classList.toggle('show');
  });

  // Close the dropdown if clicked outside
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown')) {
      dropdownContent.classList.remove('show');
    }
  });

  // Add hover interaction for desktop users
  const dropdown = document.querySelector('.dropdown');
  dropdown.addEventListener('mouseenter', () => {
    dropdownContent.classList.add('show');
  });
  dropdown.addEventListener('mouseleave', () => {
    dropdownContent.classList.remove('show');
  });
});
