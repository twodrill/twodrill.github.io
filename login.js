function toggleLoginForm() {
    const loginFormContainer = document.getElementById('login-form-container');
    loginFormContainer.style.display = loginFormContainer.style.display === 'block' ? 'none' : 'block';
}

function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you can add your login logic, e.g., sending the data to a server.
    // For this example, we'll just log the values to the console.

    console.log('Username:', username);
    console.log('Password:', password);

    // Hide the login form after submission
    document.getElementById('login-form-container').style.display = 'none';

    return false; // Prevent the form from submitting normally
}
