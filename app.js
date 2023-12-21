function validateForm() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Basic validation, you can add more specific checks
    if (fullName === '' || email === '' || password === '') {
        alert('Please fill in all fields.');
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Form submitted successfully!');
        // Uncomment the line below to submit the form
        // document.getElementById('myForm').submit();
    }
}

function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMoreInfo() {
    // Replace this alert with your desired interaction or action
    alert('Button Clicked! Add your custom interaction here.');
}



// Target the paragraph element
var paragraph = document.getElementById('myPara');


// Set initial styles
// paragraph.style.opacity = 0;

// Use anime.js for the fade-in animation
// anime({
//     targets: '#myPara',
//     opacity: 1,
//     duration: 1500, // Animation duration in milliseconds
//     easing: 'easeInOutQuad' // Easing function
// });
