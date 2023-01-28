const body = document.querySelector('body');
const modeToggle = document.querySelector('.mode-toggle');
const toggleText = document.querySelector('.link-name');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
}); 