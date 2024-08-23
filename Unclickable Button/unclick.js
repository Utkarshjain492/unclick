const container = document.querySelector('.container');
const question = document.querySelector('#question');
const yes = document.querySelector('#yes');
const no = document.querySelector('#no');

const containerRect = container.getBoundingClientRect();
const noRect = no.getBoundingClientRect();

yes.addEventListener('click', () => {
    question.innerHTML = ('Yes, I Love You.. 🫣');
});
no.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (containerRect.width - noRect.width)) + 1;
    const j = Math.floor(Math.random() * (containerRect.height - noRect.height)) + 1;

    no.style.left = i + 'px';
    no.style.top = j + 'px';
});