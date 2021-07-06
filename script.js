// Validate Email
const validateEmail = function() {
    const emailValue = emailField.value;
    const regEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
    
    if (regEx.test(emailValue)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    };
};

const emailField = document.getElementById('email-input');
emailField.addEventListener('focusout', validateEmail);

// Validate Country
const validateCountry = function() {
    const countryValue = countryField.value;
    const regEx = /^[a-zA-Z]+$/;
    
    if (regEx.test(countryValue)) {
        return true;
    } else {
        alert("You have entered an invalid value for your country!");
        return false;
    };
};

const countryField = document.getElementById('country-input');
countryField.addEventListener('focusout', validateEmail);

// Validate ZIP
const validateZip = function() {
    const zipValue = zipField.value;
    const regEx = /^\d{5}$|^\d{5}-\d{4}$/;
    
    if (regEx.test(zipValue)) {
        return true;
    } else {
        alert("You have entered an invalid ZIP!");
        return false;
    };
};

const zipField = document.getElementById('zip-input');
zipField.addEventListener('focusout', validateZip);

// Validate Password
const validatePassword = function() {
    const passwordValue = passwordField.value;
    const regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*([^\w\s]|[_])).{8,}$/;
    
    if (regEx.test(passwordValue)) {
        return true;
    } else {
        alert("You have entered an invalid password! It must be 8 characters long and contain at least one lower case letter, one upper case letter, one number, and one symbol.");
        return false;
    };
};

const passwordField = document.getElementById('password-input');
passwordField.addEventListener('focusout', validatePassword);

// Match Password
const confirmPassword = function() {
    const passwordValue = passwordField.value;
    const confirmValue = confirmField.value;
    
    if (passwordValue === confirmValue) {
        return true;
    } else {
        alert("Your passwords do not match! Enter the correct password.");
        return false;
    };
};

const confirmField = document.getElementById('confirm-input');
confirmField.addEventListener('focusout', confirmPassword);