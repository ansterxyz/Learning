function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var storedUser = localStorage.getItem(username);
    if (storedUser && JSON.parse(storedUser).password === password) {
        displayProfile(JSON.parse(storedUser));
    } else {
        alert('Неверное имя пользователя или пароль!');
    }
}

function register() {
    var username = document.getElementById('regUsername').value;
    var password = document.getElementById('regPassword').value;
    var fullName = document.getElementById('regFullName').value;
    var email = document.getElementById('regEmail').value;
    var user = { username: username, password: password, fullName: fullName, email: email };
    localStorage.setItem(username, JSON.stringify(user));
    document.getElementById('regForm').style.display = 'none';
    document.getElementById('authForm').style.display = 'block';
}

function displayProfile(user) {
    document.getElementById('userInfo').innerText = 'ФИО: ' + user.fullName;
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}

function logout() {
    document.getElementById('profile').style.display = 'none';
    document.getElementById('authForm').style.display = 'block';
}

function showRegistrationForm() {
    document.getElementById('authForm').style.display = 'none';
    document.getElementById('regForm').style.display = 'block';
}

function showAuthForm() {
    document.getElementById('regForm').style.display = 'none';
    document.getElementById('authForm').style.display = 'block';
}
