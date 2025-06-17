const allowedDomains = ["mail.ru", "yandex.ru", "gmail.com"];

const validateEmail = (email) => {
    const parts = email.split("@");
    if (parts.length !== 2) return false;
    const domain = parts[1].toLowerCase();
    return allowedDomains.includes(domain);
};

const validateUsername = (username) => {
    return /^[A-Za-z0-9 ]+$/.test(username);
};

const validatePassword = (password) => {
    return password.length >= 4;
};

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login");
    const registerBtn = document.getElementById("register");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    const handleLoginClick = () => {
        loginBtn.style.backgroundColor = "#7ccef7";
        registerBtn.style.backgroundColor = "#4c98ca";
        loginForm.style.left = "50%";
        registerForm.style.left = "-50%";
        loginForm.style.opacity = 1;
        registerForm.style.opacity = 0;
    };

    const handleRegisterClick = () => {
        loginBtn.style.backgroundColor = "#4c98ca";
        registerBtn.style.backgroundColor = "#7ccef7";
        loginForm.style.left = "150%";
        registerForm.style.left = "50%";
        loginForm.style.opacity = 0;
        registerForm.style.opacity = 1;
    };

    loginBtn.addEventListener("click", handleLoginClick);
    registerBtn.addEventListener("click", handleRegisterClick);

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = loginForm.querySelector('input[name="username"]').value;
        const password = loginForm.querySelector('input[name="password"]').value;

        if (!validateUsername(username)) {
            alert("Имя пользователя должно содержать только латинские буквы и цифры.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Пароль должен содержать не менее 4 символов.");
            return;
        }

        alert("Вход выполнен успешно!");
    });

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = registerForm.querySelector('input[name="email"]').value;
        const username = registerForm.querySelector('input[name="username"]').value;
        const password = registerForm.querySelector('input[name="password"]').value;

        if (!validateEmail(email)) {
            alert("Недопустимый домен почты. Используйте mail.ru, yandex.ru или gmail.com");
            return;
        }

        if (!validateUsername(username)) {
            alert("Имя пользователя должно содержать только латинские буквы и цифры.");
            return;
        }

        if (!validatePassword(password)) {
            alert("Пароль должен содержать не менее 4 символов.");
            return;
        }

        alert("Регистрация прошла успешно!");
    });
});