const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const loginContent = document.getElementById('login-content');
const signupContent = document.getElementById('signup-content');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginBtn.addEventListener('click', () => {
    loginContent.style.display = 'block'; //we want it to be visible
    signupContent.style.display = 'none'; //we want it to be hidden as the user chose login

    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');

    loginForm.classList.add('loginAnimation');
} );

//now we need to do the opposite if the user selects signup instead of login

signupBtn.addEventListener('click', () => {
    loginContent.style.display = 'none'; //we'll hide this
    signupContent.style.display = 'block'; //and make this visible instead

    loginBtn.classList.remove('active');
    signupBtn.classList.add('active');

    signupForm.classList.add('signupAnimation');
} );

