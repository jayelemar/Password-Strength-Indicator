let state,
    password = document.getElementById("password"),
    passwordStrength = document.getElementById("password-strength"),
    lowUpperCase = document.querySelector(".low-upper-case i"),
    number = document.querySelector(".number i"),
    specialChar = document.querySelector(".special-char i"),
    eightChar = document.querySelector(".eigth-char i"),
    showPassword = document.querySelector(".show-pass"),
    eyeIcon = document.querySelector("#eye");
    btn = document.querySelector("button");

// Show Password 
showPassword.addEventListener('click', toggle);
eyeIcon.addEventListener('click', toggleEye);
password.addEventListener('keyup', () => {
    let pass = password.value;
    checkStrength(pass);
});

// Toggle Password Visibility
function toggle() {
    if(state) {
        password.setAttribute("type", "password");
        state = false;
    } else {
        password.setAttribute("type", "text");
        state = true;
    }
}

// Toggle Eye Icon
function toggleEye() {
        eyeIcon.classList.toggle("fa-eye-slash");
}

// Check Password Strength
function checkStrength(password) {
    let strength = 0;

    // Check Lower & uppercase
    if(password.match(/([a-z].*[A-Z])|([A-z].*[a-z])/)) {
        strength += 1;
        // lowUpperCase.classList.remove("fa-circle");
        // lowUpperCase.classList.add("fa-check");
        addCheck(lowUpperCase);
    } else {
        // lowUpperCase.classList.remove("fa-check");
        // lowUpperCase.classList.add("fa-circle");
        addCircle(lowUpperCase);
    }

    // Check if there is numbers
    if(password.match(/([0-9])/) ) {
        strength += 1;
        addCheck(number);
    } else {
        addCircle(number);
    }

    // Check for Special Char 
    if(password.match(/([!,%,&,@,#,*,?,_,~])/) ){
        strength += 1;
        addCheck(specialChar);
    } else {
        addCircle(specialChar);
    }

    // Check if password is > 7
    if(password.length >= 8){
        strength += 1;
        addCheck(eightChar);
    } else {
        addCircle(eightChar);
    }

    // update progress bar
    if(strength == 1){
        removePassStrength();
        passwordStrength.classList.add("pb-danger");
    } else if (strength == 2){
        removePassStrength();
        passwordStrength.classList.add("pb-warning");
    } else if (strength == 3){
        removePassStrength();
        passwordStrength.classList.add("pb-primary");
    } else if(strength == 4){
        removePassStrength();
        passwordStrength.classList.add("pb-success");
        btn.removeAttribute("disabled");
    }
}

// Add Check Icon
function addCheck(charRequired){
    charRequired.classList.remove("fa-circle");
    charRequired.classList.add("fa-check");
}

// Remove Check & Add Circle Icon
function addCircle(charRequired){
    charRequired.classList.remove("fa-check");
    charRequired.classList.add("fa-circle");
}

// Remove Password Strength
function removePassStrength(){
    passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
    btn.disabled = true;
}


