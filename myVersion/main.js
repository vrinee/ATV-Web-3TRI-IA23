//troca de tema
const linkTheme = document.querySelector('#theme-opener');
const themeModal = document.querySelector('#themeChanger');

function toggleTheme() {
    themeModal.showModal();
    if(themeModal.open){
        document.querySelectorAll('dialog button').forEach(
            bt => bt.addEventListener('click', () => themeModal.close()));
    }
}

linkTheme.addEventListener('click', toggleTheme);

const btTheme = document.querySelector('#themeBt');
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

btTheme.addEventListener('click', changeTheme);

//menu

const bt = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

function toggleMenu() {
    bt.classList.toggle('opened');
    menu.classList.toggle('opened');
}

bt.addEventListener('click', toggleMenu);

//album modal

const album = document.querySelectorAll('.album');


function openAlbum(clickedAlbum) {
    let classOfAlbum = clickedAlbum.getAttribute('class');
    let firstClass = classOfAlbum.split(' ')[1];
    let dialog = document.querySelector(`dialog.${firstClass}`);
    dialog.showModal();
    if(dialog.open){
        document.querySelectorAll('dialog button').forEach(
            bt => bt.addEventListener('click', () => dialog.close()));
    }
}

album.forEach((album) => {
    album.addEventListener('click', () => openAlbum(album));
}
);


