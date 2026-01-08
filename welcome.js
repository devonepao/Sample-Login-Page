// Check if user is logged in
window.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // Redirect to login page if not logged in
        window.location.href = 'index.html';
    }
});

// Handle logout
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear login status
    sessionStorage.removeItem('isLoggedIn');
    // Redirect to login page
    window.location.href = 'index.html';
});
