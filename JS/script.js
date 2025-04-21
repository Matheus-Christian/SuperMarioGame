const mario = document.querySelector('.mario');

const jump = () => { /*2 - dispara a função jump*/
    mario.classList.add('jump'); /*3 -  add class jump na class mario */

    setTimeout (() => {
        mario.classList.remove('jump'); /*remove class jump da class mario*/
    }, 500); /*nesse tempo*/
}

document.addEventListener("keydown", jump); /*1 - ao pressionar qualquer tecla */