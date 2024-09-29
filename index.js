document.addEventListener('DOMContentLoaded', function() {
const username = document.getElementById("username");
const pswd = document.getElementById("password");
var btn = document.getElementById("login-btn");

function onLogin(){
    if(username.value=='Admin' && pswd.value=='1234'){
        alert("Logged in");
    }
    else{
        alert("Incorrect credentials");
    }
}
btn.addEventListener('click',onLogin);
});