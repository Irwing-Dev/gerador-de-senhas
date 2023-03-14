let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let copied = document.getElementById("copied")

let sizePassword = document.querySelector("#numero");
let password = document.getElementById('password');

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*#%&;!.,";
let nums = "1234567890";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function () {
    sizePassword.innerHTML = this.value
}

function generatePassword() {
    
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
}
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function generatePasswordPin() {

    let pass = "";
    for (let i = 0, n = nums.length; i < sliderElement.value; ++i) {
        pass += nums.charAt(Math.floor(Math.random() * n));
}
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(password.textContent);
    copied.style.display = "flex"
}