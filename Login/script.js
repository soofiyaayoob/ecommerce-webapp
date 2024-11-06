document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple client-side validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Please enter both username and password.';
        return;
    }

    // Create a payload for the login request
    const payload = {
        username: username,
        password: password
    };

    // Send the login request via AJAX
    fetch('http://localhost:8080/perform_login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set the content type to JSON
        },
        body: JSON.stringify(payload) // Convert the payload to JSON
    })
    .then(response => {
        if (response.ok) {
            // Handle successful login here (redirect, show success message, etc.)
            window.location.href = '/home'; // Redirect to home page
        } else {
            // Handle errors (401 Unauthorized, etc.)
            document.getElementById('error-message').textContent = 'Invalid username or password.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('error-message').textContent = 'An error occurred. Please try again.';
    });
});
