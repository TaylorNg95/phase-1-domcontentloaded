document.addEventListener('DOMContentLoaded', changeParagraph);

function changeParagraph(){
    const p = document.querySelector('#text');
    p.textContent = 'This is really cool!';
}