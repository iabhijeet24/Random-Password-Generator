alert("hello");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "%$#@&*.";

const variables = upperCase + lowerCase + symbol + number;

let button = document.getElementById("button")
let passwordLengthInput = document.getElementById("number");
let passwordbox = document.getElementById("newpassword"); 

function generator() {
    let password = ""; 
    let passwordLength = parseInt(passwordLengthInput.value); 

    for (let i = 0; i < passwordLength; i++) {
        password += variables[Math.floor(Math.random() * variables.length)];
    }
    passwordbox.value = password
    // newpassword.innerText = password; // 
}

