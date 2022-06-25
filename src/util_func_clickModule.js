export function createCountClick() {
    const getDiv = document.querySelector('')

    let count = 0
    document.body.addEventListener('click', (event) => {
        count += 1
    })

    setTimeout(() => {
        getDiv.textContent = `Вы совершили ${count} кликов`
        getDiv.style.opacity = '1'
    }, 3000)

    setTimeout(() => {
        getDiv.style.opacity = '0'
    }, 6000)
}