// Check if user is logged in and handle logout
window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // Redirect to login page if not logged in
        window.location.href = 'index.html';
        return;
    }
    
    // Handle logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // Clear login status
            sessionStorage.removeItem('isLoggedIn');
            // Redirect to login page
            window.location.href = 'index.html';
        });
    }
});
