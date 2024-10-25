document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {
        fullname: formData.get('fullname'),
        username: formData.get('username'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword'),
        state: formData.get('state'),
        city: formData.get('city'),
        pincode: formData.get('pincode'),
        gender: formData.get('gender')
    };

    if (validateForm(data)) {
        // Simulating POST request
        fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // Redirect to OTP page
                window.location.href = 'otp.html';
            } else {
                alert('Registration failed: ' + result.message);
            }
        })
        .catch(error => console.error('Error:', error));
//         .then(response => response.text()) // Change this to text() to handle string responses
// .then(result => {
//     alert(result); // Use the result directly as it is a string
// })
// .catch(error => console.error('Error:', error));
    }
});

function validateForm(data) {
    if (data.password !== data.confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Add any other validation you need
    return true;
}

