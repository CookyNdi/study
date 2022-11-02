let usernameInput = document.getElementById('usernameInput')
let passwordInput = document.getElementById('passwordInput')
let corecct = document.getElementById('corecct')
let incorecct = document.getElementById('incorecct')
let form = document.getElementById('form')
let logout = document.getElementById('logout')
let register = document.getElementById('register')
let btn = document.getElementById('btn')
// let letter = document.getElementById("letter")
// let capital = document.getElementById("capital")
// let number = document.getElementById("number")
// let length = document.getElementById("length")

function onRegis() {
    localStorage.setItem("username", usernameInput.value)
    localStorage.setItem("password", passwordInput.value)
    location.replace("index.html")
}


passwordInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById('btn').click();
    }
})

function onLogin() {
    if (usernameInput.value == localStorage.getItem('username') && passwordInput.value == localStorage.getItem('password')) {
        localStorage.setItem("user", "userlogin")
        localStorage.setItem("pass", "passwordlogin")
        form.style.display = "none"
        logout.style.display = "block"
        corecct.style.display = "block"
        register.style.display = "none"
        incorecct.style.display = "none"
    } else {
        incorecct.style.display = "block"
    }
}

if (localStorage.getItem('user') && localStorage.getItem('pass')) {
    asdform.style.display = "none"
    asdlogout.style.display = "block"
    asdcorecct.style.display = "block"
    asdregister.style.display = "none"
}

function onLogout() {
    localStorage.removeItem('user')
    localStorage.removeItem('pass')
    location.reload()
}

// // When the user clicks on the password field, show the message box
// passwordInput.onfocus = function () {
//     document.getElementById("message").style.display = "block";
// }

// // When the user clicks outside of the password field, hide the message box
// passwordInput.onblur = function () {
//     document.getElementById("message").style.display = "none";
// }

// // When the user starts to type something inside the password field
// passwordInput.onkeyup = function () {
//     // Validate lowercase letters
//     var lowerCaseLetters = /[a-z]/g;
//     if (passwordInput.value.match(lowerCaseLetters)) {
//         letter.classList.remove("invalid");
//         letter.classList.add("valid");
//     } else {
//         letter.classList.remove("valid");
//         letter.classList.add("invalid");
//     }

//     // Validate capital letters
//     var upperCaseLetters = /[A-Z]/g;
//     if (passwordInput.value.match(upperCaseLetters)) {
//         capital.classList.remove("invalid");
//         capital.classList.add("valid");
//     } else {
//         capital.classList.remove("valid");
//         capital.classList.add("invalid");
//     }

//     // Validate numbers
//     var numbers = /[0-9]/g;
//     if (passwordInput.value.match(numbers)) {
//         number.classList.remove("invalid");
//         number.classList.add("valid");
//     } else {
//         number.classList.remove("valid");
//         number.classList.add("invalid");
//     }

//     // Validate length
//     if (passwordInput.value.length >= 8) {
//         length.classList.remove("invalid");
//         length.classList.add("valid");
//     } else {
//         length.classList.remove("valid");
//         length.classList.add("invalid");
//     }
// }






