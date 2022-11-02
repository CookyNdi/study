let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains_behind = document.getElementById('mountains_behind')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let mountains_front = document.getElementById('mountains_front')
let header = document.querySelector('header')

window.addEventListener('scroll', function(){
    let valeu = window.scrollY;
    stars.style.left = valeu * 0.25 + 'px';
    moon.style.top = valeu * 1.05 + 'px';
    mountains_behind.style.top = valeu * 0.5 + 'px';
    mountains_front.style.top = valeu * 0 + 'px';
    text.style.marginRight = valeu * 4 + 'px';
    btn.style.marginTop = valeu * 1.5 + 'px';
    header.style.top = valeu * 0.5 + 'px';
})