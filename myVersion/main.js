//troca de tema
const theme = document.querySelector('#theme');
const leaf = document.querySelector('#backgroundImg');
function changeTheme() {
    if (theme.getAttribute('href') == 'css/light.css') {
        theme.href = 'css/dark.css';
        leaf.src = 'img/leavesB&W.jpg';
        return;
    }
    theme.href = 'css/light.css';
    leaf.src = 'img/leaves.jpg';
}

//menu

const bt = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    bt.classList.toggle('opened');
    menu.classList.toggle('opened');
}

bt.addEventListener('click', toggleMenu);