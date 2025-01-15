// Get all form elements
const form = document.querySelector('form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const submitButton = form.querySelector('button[type="submit"]');

// Hide all error messages initially
document.querySelectorAll('.error').forEach(error => {
    error.style.display = 'none';
});

function ValidateEmail() {
    const errorElement = emailInput.nextElementSibling;

    // Retrieve the pattern as a regular expression
    const pattern = new RegExp(emailInput.getAttribute('pattern'));

    // Validate the email
    if (!pattern.test(emailInput.value)) {
        errorElement.style.display = "block"; // Show error
        emailInput.style.borderBottomColor = "red"; // Highlight invalid input
    } else {
        errorElement.style.display = "none"; // Hide error
        emailInput.style.borderBottomColor = "green"; // Highlight valid input
    }
}

function ValidatePhone() {
    const errorElement = phoneInput.nextElementSibling;

    const pattern = new RegExp(phoneInput.getAttribute('pattern'));

    if (!pattern.test(phoneInput.value)) {
        errorElement.style.display = "block"; 
        phoneInput.style.borderBottomColor = "red"; 
    } else {
        errorElement.style.display = "none"; 
        phoneInput.style.borderBottomColor = "green"; 
    }
}

function ValidatePassword() {
    const errorElement = confirmPasswordInput.nextElementSibling;

    const pattern = new RegExp(phoneInput.getAttribute('pattern'));

    if (!(confirmPasswordInput.value === passwordInput.value)) {
        errorElement.style.display = "block"; 
        confirmPasswordInput.style.borderBottomColor = "red"; 
    } else {
        errorElement.style.display = "none"; 
        confirmPasswordInput.style.borderBottomColor = "green"; 
    }
}

function Validatepasswordsize() {
    const errorElement = passwordInput.nextElementSibling;

    const pattern = new RegExp(passwordInput.getAttribute('pattern'));

    if (!pattern.test(passwordInput.value)) {
        errorElement.style.display = "block"; 
        passwordInput.style.borderBottomColor = "red"; 
    } else {
        errorElement.style.display = "none"; 
        passwordInput.style.borderBottomColor = "green"; 
    }
}