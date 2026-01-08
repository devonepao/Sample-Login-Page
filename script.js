// Default credentials
const DEFAULT_USERNAME = "harshityadav95";
const DEFAULT_PASSWORD = "solvepao";

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorMessage = document.getElementById('error-message');
        
        // Validate credentials
        if (username === DEFAULT_USERNAME && password === DEFAULT_PASSWORD) {
            // Store login status
            sessionStorage.setItem('isLoggedIn', 'true');
            // Redirect to welcome page
            window.location.href = 'welcome.html';
        } else {
            // Show error message
            errorMessage.textContent = 'Invalid username or password. Please try again.';
            // Clear password field
            document.getElementById('password').value = '';
        }
    });

    // Clear error message when user starts typing
    document.getElementById('username').addEventListener('input', function() {
        document.getElementById('error-message').textContent = '';
    });

    document.getElementById('password').addEventListener('input', function() {
        document.getElementById('error-message').textContent = '';
    });
});
