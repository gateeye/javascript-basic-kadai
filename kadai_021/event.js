const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    setTimeout(() => {
        console.log("nnnnn");
        const textchange = document.getElementById('text');
        textchange.textContent = 'ボタンをクリックしました';
    }, 2000);
});