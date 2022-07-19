const nav = document.getElementById('offcanvas');
const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggleButton.classList.toggle('active');
});

document.querySelectorAll('#offcanvas a').forEach((n) => n
  .addEventListener('click', () => {
    nav.classList.remove('active');
    toggleButton.classList.remove('active');
  }));
