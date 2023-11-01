const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    const textchange = document.getElementById('text')
    textchange.textContent = 'ボタンをクリックしました'
})