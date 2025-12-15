// Hero button interaktiv effekti
document.getElementById('funBtn').addEventListener('click', () => {
    alert('🎉 LOL! Siz endi saytimizni kashf qildingiz!');
    document.body.style.background = `linear-gradient(${Math.random()*360}deg,#${Math.floor(Math.random()*16777215).toString(16)},#${Math.floor(Math.random()*16777215).toString(16)})`;
});
