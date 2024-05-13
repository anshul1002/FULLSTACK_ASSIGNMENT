document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    
    const predefinedUser = {
        username: 'admin',
        password: 'password123'
    };

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

      
        const enteredUsername = document.getElementById('username').value;
        const enteredPassword = document.getElementById('password').value;

       
        if (enteredUsername === predefinedUser.username && enteredPassword === predefinedUser.password) {
            console.log('Login Success');
           
            window.location.href = 'programming_learning_website.html';
        } else {
            console.log('Invalid credentials');
            alert('Invalid credentials. Please try again.');
        }
    });
});
