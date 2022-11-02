const btn = document.querySelector('button')

const colors = ['salmon', 'green', 'red', 'purple', 'blue', 'yellow', 'white', 'grey', 'violet', '#75DF94', '#B84930'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function onClick() {
        btn.style.backgroundColor = colors[getRandomInt(colors.length)];
        btn.style.color = white;
}

btn.addEventListener('click', onClick)