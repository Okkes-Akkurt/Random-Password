const generateButton = document.querySelector("#generate");
const copyButton = document.querySelector("#copy");

function generatePw() {
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.?!*'
    let passwordsLength = 12;
    let password = '';
    for (let i = 0; i < passwordsLength; i++) {
        const randomPassword = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomPassword, randomPassword + 1)
    }
    document.getElementById('password').value = password;
}

function copyPw() {
    let copyText = document.getElementById('password');
    copyText.select();
    copyText.setSelectionRange(0, copyText);
    navigator.clipboard.writeText(copyText.value);
    alert('Password copied successfully');
}