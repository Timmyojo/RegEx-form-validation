const formFields = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\.-]+)@([a-z\.-]+)\.([a-z]{2,9})([\.a-z]{2,9})?$/,
    password: /^[a-z\d@\._-]{5,12}$/,
    phone: /^[\d]{11}$/
}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
    
}
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, formFields[e.target.name])
    })
})