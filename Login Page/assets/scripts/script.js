//check if any input field is empty
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
}

//print error name
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-group error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//show valid input fields
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}


//Email sanitization
function isValidEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.value.trim() !== ''){
        if(re.test(input.value.trim())){
            showSuccess(input);
        }else {
            showError(input, "Email is not valid.");
        }
    }

}

//uppercase first letter of the input
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase().concat(input.id.slice(1));
}

//check password matches or not
function checkPasswordMatch(input1, input2){
    if (input1.value !== input2.value){
        showError(input2, "Passwords do not match.");
    }
}

//Sign up page
function checkSignUP(){
    //alert("submitted");
    const form = document.getElementById('form');
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirm_Password = document.getElementById('confirm_Password');
    
    form.addEventListener('submit', function (e){
    e.preventDefault();
    checkRequired([firstname,lastname,email,password,confirm_Password]);
    isValidEmail(email);
    checkPasswordMatch(password, confirm_Password);
})
}


//Sign in page
function signIn(){

const form = document.getElementById('form');
const email= document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', function (e){
    e.preventDefault();
    checkRequired([email,password]);
    isValidEmail(email);
/*
    if ((email.value.trim() !== '') && (password.value.trim() !== '')){
    if((email.value === "admin@sample.com") && (password.value === "admin123415"){
        alert("Login successfully");
    }else{
        alert("Login failed.");
    }
    }
*/
})
}

 //Forgot password page
function forgotPassword(){

const form = document.getElementById('form');
const email= document.getElementById('email');

form.addEventListener('submit', function (e){
    e.preventDefault();
    checkRequired([email]);
    isValidEmail(email);
})
}
