//troca de tema
const theme = document.querySelector('#theme');
function changeTheme() {
    if (theme.getAttribute('href') == 'css/light.css') {
        theme.href = 'css/dark.css';
        return;
    }
    theme.href = 'css/light.css';
}