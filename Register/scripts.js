document.addEventListener('DOMContentLoaded', () => {
    console.log('start');

    const registrationForm = document.getElementById("registrationForm");

    function validateForm(data) {
        // Basic validation to check if all fields have values
        if (!data.fullName || !data.username || !data.email || !data.mobileNo || !data.password) {
            alert("Please fill in all required fields.");
            return false; // Stop form submission if validation fails
        }
        return true; // Continue form submission if validation passes
    }

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = new FormData(this);
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');

        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return; // Stop form submission
        }

        // Prepare data object without confirmPassword
        const data = {
            fullName: formData.get('fullname'),
            username: formData.get('username'),
            email: formData.get('email'),
            mobileNo: formData.get('phone'),
            password: password,
            gender: formData.get('gender'),
            addresses: [
                {
                    state: formData.get('state'),
                    city: formData.get('city'),
                    pincode: formData.get('pincode')
                }
            ]
        };
        console.log("Form data:", data); // Check if data is correctly populated
        
        // Call validateForm and proceed if it returns true
        if (validateForm(data)) {
            fetch('http://localhost:8080/register', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                console.log("Response status:", response.status);
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.message || "Network response was not ok");
                    });
                }
                return response.json();
            })
            .then(result => {
                console.log("Server response:", result);
                if (result.success) {
                    // Redirect to OTP page if registration is successful
                    window.location.href = 'otp.html';
                } else {
                    alert('Registration failed: ' + result.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred: ' + error.message);
            });
        }
    });
});
