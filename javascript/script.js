const form = document.getElementById('form');
const username = document.getElementById('username');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const tlf = document.getElementById('tlf');
const date = document.getElementById('date');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const tlfValue = tlf.value.trim();
    const dateValue = date.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Debes introducir un nombre de usuario');
    } else {
        setSuccessFor(username);
    }

    if (nameValue === '') {
        setErrorFor(name, 'Debes introducir tu nombre');
    } else {
        setSuccessFor(name);
    }

    if (surnameValue === '') {
        setErrorFor(surname, 'Debes introducir tus apellidos');
    } else {
        setSuccessFor(surname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Debes introducir tu email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Este email no es válido');
    } else {
        setSuccessFor(email);
    }
    /*importante*/
    if (tlfValue === '') {
        setErrorFor(tlf, 'Password cannot be blank');
    } else {
        setSuccessFor(tlf);
    }

    if (dateValue === '') {
        setErrorFor(date, 'Debes introducir tu fecha de nacimiento');
    } else {
        setSuccessFor(date);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}