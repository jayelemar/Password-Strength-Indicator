const form = document.getElementById("form"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    password2 = document.getElementById("password2");

    // Form Event Listener
form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 6, 16);
    checkLength(password, 6, 16);
    checkEmail(email);
    matchPassword(password, password2);
});

// Check Required Fields
function checkRequired(inputAll) {
    inputAll.forEach( (input) =>{
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    })
};

//Check Input Length 
function checkLength(input, min, max) {
    if(input.value.length < min ){
        showError(input, `${getFieldName(input)} is must be atleast ${min} characters.`);
    } else if(input.value.length > max ) {
        showError(input, `${getFieldName(input)} is must be less than ${max} characters.`);
    } else {
        showSuccess(input);
    }
}

// Validate Email
function checkEmail(input){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // const re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, "Email is not Valid")
    }
}

// Check Password
function matchPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(Input2, "Password do not match");
    }
}


// Show Error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
}

// Show Success Message 
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Get Field Name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

