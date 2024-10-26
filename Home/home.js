// document.addEventListener('DOMContentLoaded', function () {
//     const offers = document.getElementById('offers');
//     const menu = document.getElementById('menu');
//     const notifications = document.getElementById('notifications');
//     const cart = document.getElementById('cart');
//     const wishlist = document.getElementById('wishlist');
//     const profile = document.getElementById('profile');

//     // // Add event listeners to handle clicks
//     // offers.addEventListener('click', () => {
//     //     window.location.href = '/offers.html';
//     // });

//     // menu.addEventListener('click', () => {
//     //     window.location.href = '/menu.html';
//     // });

//     // notifications.addEventListener('click', () => {
//     //     alert('No new notifications!');
//     // });

//     // cart.addEventListener('click', () => {
//     //     window.location.href = '/cart.html';
//     // });

//     // wishlist.addEventListener('click', () => {
//     //     window.location.href = '/wishlist.html';
//     // });

//     // profile.addEventListener('click', () => {
//     //     window.location.href = '/profile.html';
//     // });
// });
// // Get the notification icon and notification content div
// const notificationIcon = document.getElementById('notification-icon');
// const notificationContent = document.getElementById('notification-content');

// // Toggle notification content when notification icon is clicked
// notificationIcon.addEventListener('click', () => {
//     notificationContent.classList.toggle('show');
// });

// // Close the notification dropdown when clicking outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.notification-icon')) {
//         if (notificationContent.classList.contains('show')) {
//             notificationContent.classList.remove('show');
//         }
//     }
// };


document.addEventListener('DOMContentLoaded', function () {
    const offers = document.getElementById('offers');
    const menu = document.getElementById('menu');
    const notifications = document.getElementById('notifications');
    const cart = document.getElementById('cart');
    const wishlist = document.getElementById('wishlist');
    const profile = document.getElementById('profile');
    
    // Add event listeners to handle clicks
    if (offers) {
        offers.addEventListener('click', () => {
            
            window.location.href = 'offer.html';
        });
    }

    if (menu) {
        menu.addEventListener('click', () => {
            window.location.href = 'menu.html';
        });
    }

    
    
    if (cart) {
        cart.addEventListener('click', () => {
            window.location.href = '/cart.html';
        });
    }

    if (wishlist) {
        wishlist.addEventListener('click', () => {
            window.location.href = '/wishlist.html';
        });
    }

  

    // Notification dropdown functionality
    const notificationIcon = document.getElementById('notification-icon');
    const notificationContent = document.getElementById('notification-content');

    if (notificationIcon && notificationContent) {
        // Toggle notification content when notification icon is clicked
        notificationIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click event from bubbling up to the window
            notificationContent.classList.toggle('show');
        });

        // Close the notification dropdown when clicking outside of it
        window.addEventListener('click', (event) => {
            if (!event.target.closest('#notification-icon') && !event.target.closest('#notification-content')) {
                if (notificationContent.classList.contains('show')) {
                    notificationContent.classList.remove('show');
                }
            }
        });
    }
   
        const profileIcon = document.getElementById('profile');
        const profileContent = document.getElementById('profile-content');

        // Toggle dropdown on profile icon click
        if (profileIcon && profileContent) {
            // Toggle notification content when notification icon is clicked
            profileIcon.addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent click event from bubbling up to the window
                profileContent.classList.toggle('show');
            });
    
            // Close the notification dropdown when clicking outside of it
            window.addEventListener('click', (event) => {
                if (!event.target.closest('#notification-icon') && !event.target.closest('#notification-content')) {
                    if (profileContent.classList.contains('show')) {
                        profileContent.classList.remove('show');
                    }
                }
            });
        }
});
