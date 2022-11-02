let element = document.body;
let toggleSun = document.getElementById('toggleSun')
let toggleMoon = document.getElementById('toggleMoon')

function btmMoon() {
    localStorage.setItem("dark", "darkMode")
    element.classList.toggle('dark')
    toggleMoon.style.display = "none"
    toggleSun.style.display = "block"
}

function btnSun() {
    localStorage.removeItem('dark')
    toggleSun.style.display = "none"
    toggleMoon.style.display = "block"
    element.classList.remove('dark')
}

if (localStorage.getItem('dark')) {
    element.classList.toggle('dark')
    toggleMoon.style.display = "none"
    toggleSun.style.display = "block"
} else {
    toggleSun.style.display = "none"
}

let usernameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let logister = document.getElementById('logister')
let logout = document.getElementById('logout')
let inCorrect = document.getElementById('inCorrect')
let closeEror = document.getElementById('closeEror')
let memberOnly = document.getElementById('memberOnly')

function onRegis() {
    localStorage.setItem("username", usernameInput.value)
    localStorage.setItem("password", passwordInput.value)
    location.replace('login.html')
}

function onLogin() {
    if (usernameInput.value == localStorage.getItem('username') && passwordInput.value == localStorage.getItem('password')) {
        localStorage.setItem("login", usernameInput.value)
        logister.style.display = "none"
        logout.style.display = "block"
        location.replace('index.html')
    } else {
        inCorrect.style.display = "block"
    }
}

function onClose() {
    inCorrect.style.display = "none"
}

if (localStorage.getItem('login')) {
    logister.style.display = "none"
    logout.style.display = "block"
    memberOnly.style.display = "none"
}

function onLogout() {
    localStorage.removeItem("login")
    location.replace('login.html')
}

passwordInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById('btn').click();
    }
})

function login() {
    location.replace('login.html')
}