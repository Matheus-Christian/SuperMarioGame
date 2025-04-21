const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe')

const jump = () => { /*2 - dispara a função jump*/
    mario.classList.add('jump'); /*3 -  add class jump na class mario */

    setTimeout (() => {
        mario.classList.remove('jump'); /*remove class jump da class mario*/
    }, 500); /*nesse tempo*/
}

document.addEventListener("keydown", jump); /*1 - ao pressionar qualquer tecla */

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation ='nome';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './IMG/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop)
    }
}, 10);