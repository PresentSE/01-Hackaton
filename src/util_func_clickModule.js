import {random} from './utils'

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
export function createCountClick() {

    const message = document.createElement('div');
    const text = document.createElement('p');

    message.className = 'custom-message custom-message-active';
    message.style.background = `linear-gradient(${random(0, 359)}deg, ${getRandomColor()}, ${getRandomColor()})`;
    text.className = 'custom-message-text';
    text.innerText = '';

    message.append(text);

    let count = 0
    document.body.addEventListener('click', (event) => {
        count += 1
    })

    setTimeout(() => {

        text.innerText = `Вы совершили ${count} кликов`
        document.body.append(message);

    }, 3000)

    setTimeout(() => {
        const getMessage = document.querySelector('.custom-message')
        getMessage.classList.add('custom-message-disabled')
        setTimeout(() => {
            getMessage.remove()
        }, 2001)
    }, 6000)

}
