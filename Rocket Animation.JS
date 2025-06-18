    const stars = () => {
let scene = document.querySelector('.scene');
let count = 20;
let i = 0;
for (i = 0; i <= count; i++) {
let star = document.createElement('i');
let x = Math.floor(Math.random() * window.innerWidth);
let duration = Math.random() * 1;
let h = Math.random() * 100;
star.style.left = x + 'px';
star.style.width = 1 + 'px';
star.style.height = h + 'px';
star.style.animationDuration = duration + 's';
scene.appendChild(star);
}
}
stars();
