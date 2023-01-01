let element = document.body;
let darkBtn = document.getElementById('darkBtn');
let lightBtn = document.getElementById('lightBtn');

function ondarkBtn() {
    element.classList.toggle('dark')
    lightBtn.style.display= "block"
    darkBtn.style.display= "none"
}

function onlightBtn() {
    element.classList.toggle('dark')
    lightBtn.style.display= "none"
    darkBtn.style.display= "block"
}