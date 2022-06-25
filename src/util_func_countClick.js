export function createCountClick() {
    const getDiv = document.querySelector('')

    let count = 0
    document.body.addEventListener('click', (event) => {
        count += 1
    })

    setTimeout(() => {
        getDiv.textContent = `Вы совершили ${count} кликов`
        getDiv.removeAttribute('hidden')
    }, 3000)

    setTimeout(() => {
        getDiv.setAttribute('hidden', '')
    }, 6000)
}