function toggleSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);

    // Toggle the display property between 'block' and 'none'
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

function showContent(section) {
    const contentArea = document.getElementById('content-area');

    // Clear current content
    contentArea.innerHTML = '';

    if (section === 'products') {
        contentArea.innerHTML = `
            <div class="welcome-note">Welcome to the Products Section!</div>
            <div class="product-details">
                <h2>Product Management</h2>
                <p>Here you can manage your products. You can add, edit, or remove products from this section.</p>
            </div>
        `;
    } else if (section === 'orders') {
        contentArea.innerHTML = `
            <div class="welcome-note">Welcome to the Orders Section!</div>
            <div class="order-details">
                <h2>Order Management</h2>
                <p>Here you can manage orders. You can view, process, or cancel orders from this section.</p>
            </div>
        `;
    } else if (section === 'users') {
        contentArea.innerHTML = `
            <div class="welcome-note">Welcome to the Users Section!</div>
            <div class="user-details">
                <h2>User Management</h2>
                <p>Here you can manage users. You can add, edit, or remove users from this section.</p>
            </div>
        `;
    } else {
        // Default dashboard content
        contentArea.innerHTML = `
            <div class="welcome-note">Welcome to the Admin Dashboard!</div>
            <div class="default-content">Default Dashboard Content</div>
        `;
    }
}
