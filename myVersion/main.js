//troca de tema
const theme = document.querySelector('#theme');
function changeTheme() {
    if (theme.getAttribute('href') == 'css/light.css') {
        theme.href = 'css/dark.css';
        return;
    }
    theme.href = 'css/light.css';
}

//menu

const bt = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    bt.classList.toggle('opened');
    menu.classList.toggle('opened');
}

bt.addEventListener('click', toggleMenu);