
        document.addEventListener('DOMContentLoaded', function() {
            // Checking if already logged in
            checkLoginStatus();
            
            // Forms
            const loginFormContainer = document.getElementById('loginFormContainer');
            const registerFormContainer = document.getElementById('registerFormContainer');
            const forgotPasswordContainer = document.getElementById('forgotPasswordContainer');
            const dashboardContainer = document.getElementById('dashboardContainer');
            
            // Alerts
            const loginAlert = document.getElementById('loginAlert');
            const registerAlert = document.getElementById('registerAlert');
            const resetAlert = document.getElementById('resetAlert');
            
            // Login form elements
            const loginForm = document.getElementById('loginForm');
            const loginEmail = document.getElementById('loginEmail');
            const loginPassword = document.getElementById('loginPassword');
            const loginEmailError = document.getElementById('loginEmailError');
            const loginPasswordError = document.getElementById('loginPasswordError');
            const toggleLoginPassword = document.getElementById('toggleLoginPassword');
            const loginButton = document.getElementById('loginButton');
            const loginSuccessMessage = document.getElementById('loginSuccessMessage');
            const rememberMe = document.getElementById('rememberMe');
            
            // Register form elements
            const registerForm = document.getElementById('registerForm');
            const registerName = document.getElementById('registerName');
            const registerEmail = document.getElementById('registerEmail');
            const registerPassword = document.getElementById('registerPassword');
            const confirmPassword = document.getElementById('confirmPassword');
            const registerNameError = document.getElementById('registerNameError');
            const registerEmailError = document.getElementById('registerEmailError');
            const registerPasswordError = document.getElementById('registerPasswordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');
            const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
            const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
            const registerButton = document.getElementById('registerButton');
            const cancelRegister = document.getElementById('cancelRegister');
            const registerSuccessMessage = document.getElementById('registerSuccessMessage');
            
            // Forgot password form elements
            const forgotPasswordForm = document.getElementById('forgotPasswordForm');
            const resetEmail = document.getElementById('resetEmail');
            const resetEmailError = document.getElementById('resetEmailError');
            const resetButton = document.getElementById('resetButton');
            const cancelReset = document.getElementById('cancelReset');
            const resetSuccessMessage = document.getElementById('resetSuccessMessage');
            
            // Dashboard elements
            const logoutButton = document.getElementById('logoutButton');
            const displayName = document.getElementById('displayName');
            const displayEmail = document.getElementById('displayEmail');
            const lastLogin = document.getElementById('lastLogin');
            
            // Navigation links
            const showCreateAccount = document.getElementById('showCreateAccount');
            const showForgotPassword = document.getElementById('showForgotPassword');
            
            // Email validation regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            // Initialize user storage if it doesn't exist
            if (!localStorage.getItem('users')) {
                // Create some demo users
                const demoUsers = [
                    {
                        name: 'Demo User',
                        email: 'demo@example.com',
                        password: 'password123',
                        lastLogin: null
                    }
                ];
                localStorage.setItem('users', JSON.stringify(demoUsers));
            }
            
            // Check if user is already logged in
            function checkLoginStatus() {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (currentUser) {
                    displayName.textContent = currentUser.name;
                    displayEmail.textContent = currentUser.email;
                    lastLogin.textContent = currentUser.lastLogin ? new Date(currentUser.lastLogin).toLocaleString() : 'First login';
                    showDashboard();
                }
            }
            
            // Show/hide forms
            function showForm(formToShow) {
                loginFormContainer.classList.remove('active');
                registerFormContainer.classList.remove('active');
                forgotPasswordContainer.classList.remove('active');
                dashboardContainer.style.display = 'none';
                
                // Hide all alerts
                loginAlert.style.display = 'none';
                registerAlert.style.display = 'none';
                resetAlert.style.display = 'none';
                
                if (formToShow === dashboardContainer) {
                    dashboardContainer.style.display = 'block';
                } else {
                    formToShow.classList.add('active');
                }
            }
            
            function showDashboard() {
                showForm(dashboardContainer);
            }
            
            // Navigation handlers
            showCreateAccount.addEventListener('click', function() {
                showForm(registerFormContainer);
            });
            
            showForgotPassword.addEventListener('click', function() {
                showForm(forgotPasswordContainer);
            });
            
            cancelRegister.addEventListener('click', function() {
                registerForm.reset();
                showForm(loginFormContainer);
            });
            
            cancelReset.addEventListener('click', function() {
                forgotPasswordForm.reset();
                showForm(loginFormContainer);
            });
            
            logoutButton.addEventListener('click', function() {
                if (rememberMe.checked) {
                    // Keep the current user for remember me functionality
                } else {
                    localStorage.removeItem('currentUser');
                }
                showForm(loginFormContainer);
            });
            
            // Password toggle handlers
            toggleLoginPassword.addEventListener('click', function() {
                togglePasswordVisibility(loginPassword, toggleLoginPassword);
            });
            
            toggleRegisterPassword.addEventListener('click', function() {
                togglePasswordVisibility(registerPassword, toggleRegisterPassword);
            });
            
            toggleConfirmPassword.addEventListener('click', function() {
                togglePasswordVisibility(confirmPassword, toggleConfirmPassword);
            });
            
            function togglePasswordVisibility(passwordField, toggleIcon) {
                if (passwordField.type === 'password') {
                    passwordField.type = 'text';
                    toggleIcon.textContent = '🔒';
                } else {
                    passwordField.type = 'password';
                    toggleIcon.textContent = '👁️';
                }
            }
            
            // Login form validation
            loginEmail.addEventListener('input', function() {
                validateEmail(loginEmail, loginEmailError);
            });
            
            loginPassword.addEventListener('input', function() {
                validatePassword(loginPassword, loginPasswordError);
            });
            
            // Register form validation
            registerName.addEventListener('input', function() {
                if (registerName.value.trim() === '') {
                    registerNameError.style.display = 'block';
                    registerName.style.borderColor = '#e74c3c';
                } else {
                    registerNameError.style.display = 'none';
                    registerName.style.borderColor = '#4a6eb5';
                }
            });
            
            registerEmail.addEventListener('input', function() {
                validateEmail(registerEmail, registerEmailError);
            });
            
            registerPassword.addEventListener('input', function() {
                validatePassword(registerPassword, registerPasswordError);
                // Check confirm password match if it has a value
                if (confirmPassword.value !== '') {
                    checkPasswordsMatch();
                }
            });
            
            confirmPassword.addEventListener('input', function() {
                checkPasswordsMatch();
            });
            
            function checkPasswordsMatch() {
                if (registerPassword.value !== confirmPassword.value) {
                    confirmPasswordError.style.display = 'block';
                    confirmPassword.style.borderColor = '#e74c3c';
                } else {
                    confirmPasswordError.style.display = 'none';
                    confirmPassword.style.borderColor = '#4a6eb5';
                }
            }
            
            // Reset form validation
            resetEmail.addEventListener('input', function() {
                validateEmail(resetEmail, resetEmailError);
            });
            
            // Helper validation functions
            function validateEmail(emailField, errorField) {
                if (!emailRegex.test(emailField.value)) {
                    errorField.style.display = 'block';
                    emailField.style.borderColor = '#e74c3c';
                    return false;
                } else {
                    errorField.style.display = 'none';
                    emailField.style.borderColor = '#4a6eb5';
                    return true;
                }
            }
            
            function validatePassword(passwordField, errorField) {
                if (passwordField.value.length < 6) {
                    errorField.style.display = 'block';
                    passwordField.style.borderColor = '#e74c3c';
                    return false;
                } else {
                    errorField.style.display = 'none';
                    passwordField.style.borderColor = '#4a6eb5';
                    return true;
                }
            }
            
            // User management functions
            function getUserByEmail(email) {
                const users = JSON.parse(localStorage.getItem('users'));
                return users.find(user => user.email.toLowerCase() === email.toLowerCase());
            }
            
            function saveUser(user) {
                const users = JSON.parse(localStorage.getItem('users'));
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
            }
            
            function updateUser(user) {
                const users = JSON.parse(localStorage.getItem('users'));
                const index = users.findIndex(u => u.email.toLowerCase() === user.email.toLowerCase());
                if (index !== -1) {
                    users[index] = user;
                    localStorage.setItem('users', JSON.stringify(users));
                }
            }
            
            // Form submissions
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                
                if (!validateEmail(loginEmail, loginEmailError)) isValid = false;
                if (!validatePassword(loginPassword, loginPasswordError)) isValid = false;
                
                if (isValid) {
                    // Showing loading state
                    loginButton.disabled = true;
                    loginButton.textContent = 'Logging in...';
                    
                    // Checking if user exists and password matches
                    const user = getUserByEmail(loginEmail.value);
                    
                    setTimeout(function() {
                        if (user && user.password === loginPassword.value) {
                            // Updating last login time
                            user.lastLogin = new Date().toISOString();
                            updateUser(user);
                            
                            // Saving current user for session
                            localStorage.setItem('currentUser', JSON.stringify(user));
                            
                            // Showing success message
                            loginSuccessMessage.style.display = 'block';
                            loginAlert.style.display = 'none';
                            
                            setTimeout(function() {
                                loginSuccessMessage.style.display = 'none';
                                loginButton.disabled = false;
                                loginButton.textContent = 'Log In';
                                
                                // Updating dashboard
                                displayName.textContent = user.name;
                                displayEmail.textContent = user.email;
                                lastLogin.textContent = new Date(user.lastLogin).toLocaleString();
                                
                                // Showing dashboard
                                showDashboard();
                            }, 1500);
                        } else {
                            // Showing error message
                            loginAlert.style.display = 'block';
                            loginButton.disabled = false;
                            loginButton.textContent = 'Log In';
                        }
                    }, 1000);
                }
            });
            
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = true;
                
                // Validate name
                if (registerName.value.trim() === '') {
                    registerNameError.style.display = 'block';
                    registerName.style.borderColor = '#e74c3c';
                    isValid = false;
                }
                
                // Validating email
                if (!validateEmail(registerEmail, registerEmailError)) isValid = false;
                
                // Validating password
                if (!validatePassword(registerPassword, registerPasswordError)) isValid = false;
                
                // Validating confirm password
                if (registerPassword.value !== confirmPassword.value) {
                    confirmPasswordError.style.display = 'block';
                    confirmPassword.style.borderColor = '#e74c3c';
                    isValid = false;
                }
                
                if (isValid) {
                    // Checking if email already exists
                    const existingUser = getUserByEmail(registerEmail.value);
                    
                    if (existingUser) {
                        registerAlert.style.display = 'block';
                        return;
                    } else {
                        registerAlert.style.display = 'none';
                    }
                    
                    // Showing loading state
                    registerButton.disabled = true;
                    registerButton.textContent = 'Creating Account...';
                    
                    // Creating new user object
                    const newUser = {
                        name: registerName.value,
                        email: registerEmail.value,
                        password: registerPassword.value,
                        lastLogin: null
                    };
                    
                    // Saving user to localStorage
                    setTimeout(function() {
                        saveUser(newUser);
                        registerSuccessMessage.style.display = 'block';
                        
                        setTimeout(function() {
                            registerSuccessMessage.style.display = 'none';
                            registerButton.disabled = false;
                            registerButton.textContent = 'Create Account';
                            registerForm.reset();
                            
                            // Returning to login form
                            showForm(loginFormContainer);
                        }, 1500);
                    }, 1000);
                }
            });
            
            forgotPasswordForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let isValid = validateEmail(resetEmail, resetEmailError);
                
                if (isValid) {
                    // Checking  if email exists
                    const user = getUserByEmail(resetEmail.value);
                    
                    if (!user) {
                        resetAlert.style.display = 'block';
                        return;
                    } else {
                        resetAlert.style.display = 'none';
                    }
                    
                    // Showing loading state
                    resetButton.disabled = true;
                    resetButton.textContent = 'Sending...';
                    
                    setTimeout(function() {
                        resetSuccessMessage.style.display = 'block';
                        
                        setTimeout(function() {
                            resetSuccessMessage.style.display = 'none';
                            resetButton.disabled = false;
                            resetButton.textContent = 'Send Reset Link';
                            forgotPasswordForm.reset();
                            
                            // Returning to login form
                            showForm(loginFormContainer);
                        }, 1500);
                    }, 1000);
                }
            });
            
            // Setting initial demo account for testing
            if (rememberMe.checked) {
                loginEmail.value = "demo@example.com";
                loginPassword.value = "password123";
            }
        });
