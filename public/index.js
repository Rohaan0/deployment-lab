var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

const btn = document.querySelector('button')

const colors = ['salmon', 'green', 'red', 'purple', 'blue', 'yellow', 'white', 'grey', 'violet', '#75DF94', '#B84930'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function onClick() {
        btn.style.backgroundColor = colors[getRandomInt(colors.length)];
        btn.style.color = white;
        rollbar.info('button has been clicked')
}

btn.addEventListener('click', onClick)