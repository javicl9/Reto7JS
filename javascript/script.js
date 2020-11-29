const form = document.getElementById('form');
const username = document.getElementById('username');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const tlf = document.getElementById('tlf');
const date = document.getElementById('date');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkGivenData();
});

// Function that will check every single input
function checkGivenData() {
    const usernameValue = username.value;
    const nameValue = name.value.trim();
    const surnameValue = surname.value.trim();
    const emailValue = email.value.trim();
    const tlfValue = tlf.value.trim();
    const dateValue = date.value.trim();

    let camposCorrectos = 0;

    if (usernameValue == '') {
        setErrorFor(username, 'Debes introducir un nombre de usuario');
    } else if (!isUsername(usernameValue)) {
        setErrorFor(username, 'Solo se permiten letras y números (max. 16 char.)')
    } else {
        setSuccessFor(username);
        camposCorrectos++;
    }

    if (nameValue == '') {
        setErrorFor(name, 'Debes introducir tu nombre');
    } else {
        setSuccessFor(name);
        camposCorrectos++;
    }

    if (surnameValue == '') {
        setErrorFor(surname, 'Debes introducir tus apellidos');
    } else {
        setSuccessFor(surname);
        camposCorrectos++;
    }

    if (emailValue == '') {
        setErrorFor(email, 'Debes introducir tu email');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Este email no es válido');
    } else {
        setSuccessFor(email);
        camposCorrectos++;
    }

    if (tlfValue == '') {
        setErrorFor(tlf, 'Debes introducir tu número de teléfono');
    } else if (!isTlf(tlfValue)) {
        setErrorFor(tlf, 'Este teléfono no es válido');
    } else {
        setSuccessFor(tlf);
        camposCorrectos++;
    }

    if (dateValue == '') {
        setErrorFor(date, 'Debes introducir tu fecha de nacimiento');
    } else {
        setSuccessFor(date);
        camposCorrectos++;
    }

    // If camposCorrectos equals 6 that'd mean all fields have been correctly validate
    if (camposCorrectos == 6) {
        alert("¡Enhorabuena! Te has registrado con éxito\n¡Estáte atento a tu email!\nGracias por jugar a Fortnite");

        location.replace("https://www.epicgames.com/fortnite/es-ES/home");
    } 
}

// These functions will set the proper css to help the viewer to know whether the data he gave us is correct
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

// Usefull functions to tell whether or not the data we picked is correct
function isUsername(username) {
    return /^([0-9A-z]){1,16}$/.test(username);
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isTlf(tlf) {
    return /^[1-9]{9}$/.test(tlf);
}