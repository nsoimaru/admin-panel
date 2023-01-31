const body = document.querySelector('body');
const modeToggle = document.querySelector('.mode-toggle');
const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('nav');
const toggleText = document.querySelector('.link-name');

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    // TODO Add Light Theme text at toggle button
});

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
});