const btnChange = document.querySelector('.change');
const hexContent = document.querySelector('.hex__content');
const body = document.querySelector('body');

const getHexaNumb = () => {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
};

btnChange.addEventListener('click', () => {
    let color = getHexaNumb(Math.trunc(Math.random() * 16));
    hexContent.textContent = color;
    body.style.backgroundColor = color;
});