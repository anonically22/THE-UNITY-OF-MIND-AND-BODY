document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const bookingForm = document.getElementById('bookingForm');
    const contactForm = document.querySelector('#contact-form form'); // Assuming contact.html form needs validation too

    // --- Helper function to display errors ---
    function showError(element, message) {
        const errorElement = document.getElementById(element.id + 'Error');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.color = 'red';
            errorElement.style.fontSize = '0.9em';
            errorElement.style.display = 'block'; // Make sure it's visible
        }
        element.classList.add('input-error');
    }

    // --- Helper function to clear errors ---
    function clearError(element) {
        const errorElement = document.getElementById(element.id + 'Error');
        if (errorElement) {
            errorElement.textContent = '';
            errorElement.style.display = 'none'; // Hide it
        }
        element.classList.remove('input-error');
    }

    // --- Helper function to validate email format ---
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // --- Registration Form Validation ---
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            let isValid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const password = document.getElementById('password');
            const confirmPassword = document.getElementById('confirmPassword');

            // Clear previous errors
            [name, email, password, confirmPassword].forEach(clearError);

            // Name validation
            if (name.value.trim() === '') {
                showError(name, 'Full name is required.');
                isValid = false;
            }

            // Email validation
            if (email.value.trim() === '') {
                showError(email, 'Email is required.');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError(email, 'Please enter a valid email address.');
                isValid = false;
            }

            // Password validation
            if (password.value === '') {
                showError(password, 'Password is required.');
                isValid = false;
            } else if (password.value.length < 8) {
                showError(password, 'Password must be at least 8 characters long.');
                isValid = false;
            }

            // Confirm password validation
            if (confirmPassword.value === '') {
                showError(confirmPassword, 'Please confirm your password.');
                isValid = false;
            } else if (password.value !== confirmPassword.value) {
                showError(confirmPassword, 'Passwords do not match.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if validation fails
            } else {
                // Optionally, you can alert success or redirect (for static prototype)
                alert('Registration form submitted successfully! (Static prototype)');
                // registerForm.reset(); // Uncomment to clear form on successful static submission
            }
        });
    }

    // --- Login Form Validation ---
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            let isValid = true;
            const email = document.getElementById('email');
            const password = document.getElementById('password');

            [email, password].forEach(clearError);

            if (email.value.trim() === '') {
                showError(email, 'Email is required.');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError(email, 'Please enter a valid email address.');
                isValid = false;
            }

            if (password.value === '') {
                showError(password, 'Password is required.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert('Login form submitted successfully! (Static prototype)');
                // loginForm.reset();
            }
        });
    }

    // --- Booking Form Validation ---
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            let isValid = true;
            const therapyType = document.getElementById('therapyType');
            const sessionDate = document.getElementById('sessionDate');
            const sessionTime = document.getElementById('sessionTime');

            [therapyType, sessionDate, sessionTime].forEach(clearError);

            if (therapyType.value === '') {
                showError(therapyType, 'Please select a therapy type.');
                isValid = false;
            }

            if (sessionDate.value === '') {
                showError(sessionDate, 'Please select a date.');
                isValid = false;
            } else {
                // Basic date validation: ensure it's not in the past
                const today = new Date();
                const selectedDate = new Date(sessionDate.value);
                today.setHours(0,0,0,0); // Compare dates only
                selectedDate.setHours(0,0,0,0); // Adjust for timezone if needed for selectedDate

                if (selectedDate < today) {
                    showError(sessionDate, 'Please select a date in the future.');
                    isValid = false;
                }
            }

            if (sessionTime.value === '') {
                showError(sessionTime, 'Please select a time.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert('Booking request submitted successfully! (Static prototype)');
                // bookingForm.reset();
            }
        });
    }

    // --- Contact Form Validation (Basic) ---
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            let isValid = true;
            const name = contactForm.querySelector('#name');
            const email = contactForm.querySelector('#email');
            const subject = contactForm.querySelector('#subject');
            const message = contactForm.querySelector('#message');

            // Simple required field validation for contact form
            // For more complex forms, you'd create specific error elements or use a more generic approach
            if (name && name.value.trim() === '') {
                alert('Name is required for contact form.'); // Simple alert for now
                isValid = false;
            }
            if (email && email.value.trim() === '') {
                alert('Email is required for contact form.');
                isValid = false;
            } else if (email && !isValidEmail(email.value.trim())) {
                alert('Please enter a valid email for contact form.');
                isValid = false;
            }
            if (subject && subject.value.trim() === '') {
                alert('Subject is required for contact form.');
                isValid = false;
            }
            if (message && message.value.trim() === '') {
                alert('Message is required for contact form.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            } else {
                alert('Contact form submitted successfully! (Static prototype)');
                // contactForm.reset();
            }
        });
    }

    // Add .input-error class style to style.css if not already present
    // This is just a note; actual CSS should be in style.css
    // e.g., .input-error { border-color: red !important; }
    // e.g., .error-message { display: block; color: red; font-size: 0.9em; margin-top: 3px; }
});

// Ensure a style for error messages is present in style.css
// For example:
// .error-message {
//     display: none; /* Hidden by default */
//     color: red;
//     font-size: 0.9em;
//     margin-top: 3px;
// }
// .input-error {
//    border: 1px solid red !important;
// }
// I've added placeholders for error messages in the HTML (e.g., <span class="error-message" id="nameError"></span>)
// and the JS will now target these.
// Also added some basic styling for these in style.css
// The provided JS includes logic to show/hide these error spans.
// I will also add basic styling for error messages and input errors to public/css/style.css
// (Actually, I will add it in the next step when I'm sure this step is complete and I am modifying the CSS)
