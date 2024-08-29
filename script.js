let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let copied = document.getElementById("copied");
let copyMessage = document.querySelector(".copy-message");

let sizePassword = document.querySelector("#number");
let password = document.getElementById('password');

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/*#%&;!.,";
let nums = "1234567890";

sizePassword.innerHTML = sliderElement.value;

function ShowOrHide(show) {
    if (show == false) {
        copyMessage.style.display = "none";
        copied.style.display = "flex";
    }
    if (show == true) {
        copyMessage.style.display = "flex";
        copied.style.display = "none";
    }
}

function openNav() {
    document.getElementById("my-nav").style.width = "400px"
    document.getElementById("my-nav").style.height = "500px"
}

function closeNav() {
    document.getElementById("my-nav").style.width = "0"
    document.getElementById("my-nav").style.height = "0"
}

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
    ShowOrHide(true)

}

function generatePasswordPin() {

    let pass = "";
    for (let i = 0, n = nums.length; i < sliderElement.value; ++i) {
        pass += nums.charAt(Math.floor(Math.random() * n));
}
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    ShowOrHide(true)
}

function copyPassword() {
    ShowOrHide(false)
    navigator.clipboard.writeText(password.textContent);
    copyMessage.style.display = "none";
    copied.style.display = "flex";
}