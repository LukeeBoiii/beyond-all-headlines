const toggle = document.getElementById('toggle-mode');
toggle.addEventListener('click', () => {
  document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
});
