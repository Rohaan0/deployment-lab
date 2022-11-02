const btn = document.querySelector('button')

const colors = ['salmon', 'green', 'red', 'purple'];


function onClick() {
    btn.style.backgroundColor = colors[i];
    btn.style.color = white;

    i = i >= colors.length - 1 ? 0 : i + 1;
}

btn.addEventListener('click', onClick)