let sideLogin = document.getElementById("sideLogin");
let sideRegis = document.getElementById("sideRegis");
let closeBtn = document.getElementById("closeBtn");

function login() {
  sideLogin.style.right = "0";
  sideRegis.style.right = "-350px";
}

function regis() {
  sideRegis.style.right = "0";
  sideLogin.style.right = "-350px";
}

function closeLogin() {
  sideLogin.style.right = "-350px";
}

function goLogin() {
  location.replace("index.html");
}

function closeRegis() {
  sideRegis.style.right = "-350px";
}

const usernameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const regisUsernameInput = document.getElementById("regisUsernameInput");
const regisPasswordInput = document.getElementById("regisPasswordInput");
const loginText = document.getElementById("loginText");
const regisText = document.getElementById("regisText");
const logoutText = document.getElementById("logoutText");
const eror = document.getElementById("eror");

function onRegis() {
  localStorage.setItem("username", regisUsernameInput.value);
  localStorage.setItem("password", regisPasswordInput.value);
  location.replace("index.html");
}

function onLogin() {
  if (
    usernameInput.value == localStorage.getItem("username") &&
    passwordInput.value == localStorage.getItem("password")
  ) {
    localStorage.setItem("user", usernameInput.value);
    location.reload();
  } else {
    eror.style.top = "0";
  }
  if ((eror.style.top = "0")) {
    usernameInput.addEventListener("click", () => {
      eror.style.top = "-100px";
    });
  }
  if ((eror.style.top = "0")) {
    passwordInput.addEventListener("click", () => {
      eror.style.top = "-100px";
    });
  }
  if ((eror.style.top = "0")) {
    closeBtn.addEventListener("click", () => {
      eror.style.top = "-100px";
    });
  }
  return;
}

if (localStorage.getItem("user")) {
  logoutText.style.display = "block";
  loginText.style.display = "none";
  sideLogin.style.display = "none";
}

if (localStorage.getItem("username")) {
  regisText.style.display = "none";
}

function Logout() {
  localStorage.removeItem("username");
  localStorage.removeItem("user");
  localStorage.removeItem("password");
  location.reload();
}

const html = document.querySelector("html");

function color1() {
  html.dataset.colorMode = "summerSplash";
}

function color2() {
  html.dataset.colorMode = "brightLights";
}

function color3() {
  html.dataset.colorMode = "icyGradient";
}

function color4() {
  html.dataset.colorMode = "scoopingIceCream";
}

const locked = document.getElementById("locked");
const locked2 = document.getElementById("locked2");
const locked3 = document.getElementById("locked3");

if (localStorage.getItem("user")) {
  locked.classList.remove("locked");
  locked.classList.add("unlock");
  locked2.classList.remove("locked");
  locked2.classList.add("unlock");
  locked3.classList.remove("locked");
  locked3.classList.add("unlock");
}

passwordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("loginBtn").click();
  }
});

usernameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("loginBtn").click();
  }
});

regisPasswordInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("regisBtn").click();
  }
});

regisUsernameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    document.getElementById("regisBtn").click();
  }
});
