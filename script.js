function validateForm(event) {
    event.preventDefault(); // Prevents the form from submitting by default
    // Perform your form validation here
    // For simplicity, let's just log a message for now
    console.log("Form submitted successfully!");
}

function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthMeter = document.getElementById('passwordStrength');
    let strength = 0;

    // Check password length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check if password contains both uppercase and lowercase characters
    if (password.match(/^(?=.*[a-z])(?=.*[A-Z])/)) {
        strength += 1;
    }

    // Check if password contains at least one number
    if (password.match(/^(?=.*\d)/)) {
        strength += 1;
    }

    // Check if password contains at least one special character
    if (password.match(/^(?=.*[!@#$%^&*])/)) {
        strength += 1;
    }

    // Update password strength meter
    if (strength === 0) {
        strengthMeter.innerHTML = '';
    } else {
        strengthMeter.innerHTML = 'Password Strength: ';
        for (let i = 0; i < strength; i++) {
            strengthMeter.innerHTML += '<span class="strong"></span>';
        }
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const showPasswordCheckbox = document.getElementById('showPassword');
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
}

function changeBackground() {
    const selectedGender = document.getElementById('gender').value;
    document.body.dataset.gender = selectedGender;
}
