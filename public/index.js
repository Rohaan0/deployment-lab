const btn = document.querySelector('button')

const colors = ['salmon', 'green', 'red', 'purple'];


function onClick() {
    for (let i = 0; i > colors.length; i++){
        btn.style.backgroundColor = colors[i];
        btn.style.color = white;
    }
}

btn.addEventListener('click', onClick)