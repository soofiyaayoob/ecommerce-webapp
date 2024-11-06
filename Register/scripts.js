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
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(`HTTP error! status: ${response.status}, message: ${text}`);
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                // You may want to display a success message to the user here
                alert("Registration successful!");
                
                // Redirect to otp.html
                window.location.href = "Login/login.html"; // Redirect to OTP page
            })
            .catch(error => {
                console.error("Error:", error);
                // Display a user-friendly error message
                alert("An error occurred during registration: " + error.message);
            });
        }
    });
});
