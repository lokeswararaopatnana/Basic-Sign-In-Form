let inputElement = document.getElementById("inputElement");
let signInTextElement = document.getElementById("signInText");

function signIn(){
    let inputValue = inputElement.value;
    signInTextElement.textContent = "Hi " + inputValue + "! Verifying your account...!";
}