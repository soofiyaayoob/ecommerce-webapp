function showAddProductForm() {
    document.getElementById("add-product-overlay").style.display = "flex";
    document.getElementById("add-product-form").style.display = "block";
}

function hideAddProductForm() {
    document.getElementById("add-product-overlay").style.display = "none";
    document.getElementById("add-product-form").style.display = "none";
}

// Function to load categories dynamically
function loadCategories() {
    const categorySelect = document.getElementById('categorySelect');
    
    // Clear previous options except the placeholder
    categorySelect.innerHTML = '<option value="">Select a Category</option>';

    // Fetch categories from backend (replace '/api/categories' with actual endpoint)
    fetch('/api/categories')
        .then(response => response.json())
        .then(categories => {
            categories.forEach(category => {
                const option = document.createElement('option');
                option.value = category.id; // Assuming `id` is the category identifier
                option.textContent = category.name; // Assuming `name` is the category name
                categorySelect.appendChild(option);
            });
        })
        .catch(error => console.error('Error loading categories:', error));
}

// Close the form when clicking outside of it
document.getElementById("add-product-overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        hideAddProductForm();
    }
});


function showAddAdminForm() {
    document.getElementById("add-admin-overlay").style.display = "flex";
    document.getElementById("add-admin-form").style.display = "block";
}

function hideAddAdminForm() {
    document.getElementById("add-admin-overlay").style.display = "none";
    document.getElementById("add-admin-form").style.display = "none";
}

document.getElementById("add-admin-overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        hideAddAdminForm();
    }
});
// Function to show the Add Category overlay
function showAddCategoryForm() {
    document.getElementById('add-category-overlay').style.display = 'flex';
    document.getElementById('add-category-form').style.display = 'block';
}

// Function to hide the Add Category overlay
function hideAddCategoryForm() {
    document.getElementById('add-category-overlay').style.display = 'none';
    document.getElementById('add-category-form').style.display = 'none';
}

// Close overlay when clicking outside the form
document.getElementById("add-category-overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        hideAddCategoryForm(); // Changed to `hideAddCategoryForm`
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Select the first form within the #add-category-form div
    const categoryForm = document.querySelector('#add-category-form form');
    
    if (categoryForm) {
        categoryForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const categoryName = document.getElementById('categoryName').value;

            const data = { categoryName };

            fetch('http://localhost:8080/admin/Addcategories', {  // Correct URL format
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => {
                if (response.ok) {
                    alert(`Category "${categoryName}" added successfully!`);
                    hideAddCategoryForm(); // Optionally, hide the form after submission
                } else {
                    alert('There was an error adding the category.');
                    return response.json(); // Handle error details if necessary
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while adding the category.');
            });
        });
    } else {
        console.error('Category form not found');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.querySelector('#add-admin-form form');

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = new FormData(registrationForm);

            // Prepare data object without confirmPassword
            const data = {
                fullName: formData.get('fullName'),
                username: formData.get('username'),
                mobileNo: formData.get('phone'),
                password: formData.get('password'), // Corrected field name
                email: formData.get('email'), // Added email field
                gender: formData.get('gender'),
            
                addresses: [
                    {
                        // Adjust these fields if your form includes additional address fields
                        state: formData.get('state'),
                        city: formData.get('city'),
                        pincode: formData.get('pincode')
                    }
                ]
            };
            console.log("Form data:", data); // Check if data is correctly populated

            // Proceed directly with sending data without frontend validation
            fetch('http://localhost:8080/admin/register', {
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
                alert("Registration successful!");

                // Redirect to login page
                window.location.href = "Login/login.html";
            })
            .catch(error => {
                console.error("Error:", error);
                alert("An error occurred during registration: " + error.message);
            });
        });
    } else {
        console.error("Registration form not found");
    }
});
function fetchProductDetails() {
    const productId = document.getElementById('productId').value;
    
    if (productId) {
        // Make an API call to fetch product details
        fetch(`/api/products/${productId}`)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    // Display product details
                    document.getElementById('productDetails').style.display = 'block';
                    document.getElementById('productImage').src = data.imageUrl; // Assuming image URL is returned
                    document.getElementById('productName').innerText = data.name;
                    document.getElementById('productPrice').innerText = `Price: ₹${data.price}`;
                    document.getElementById('productDescription').innerText = data.description;

                    // Optionally, disable further input if product doesn't exist
                } else {
                    document.getElementById('productDetails').style.display = 'none';
                    alert('Product not found');
                }
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                document.getElementById('productDetails').style.display = 'none';
            });
    } else {
        document.getElementById('productDetails').style.display = 'none';
    }
}

// Function to show the Add Offer form
function showAddOfferForm() {
    document.getElementById("add-offer-overlay").style.display = "flex";
    document.getElementById("add-offer-form").style.display = "block";
}

// Function to hide the Add Offer form
function hideAddOfferForm() {
    document.getElementById("add-offer-overlay").style.display = "none";
    document.getElementById("add-offer-form").style.display = "none";
}

// Event listener to close the Add Offer form if clicked outside the form (on the overlay)
document.getElementById("add-offer-overlay").addEventListener("click", function(event) {
    if (event.target === this) {
        hideAddOfferForm();
    }
});


