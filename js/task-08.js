const form = document.querySelector('.login-form');

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password } 
    } = event.currentTarget;
     console.log(email.value, password.value);
     if (email.value === "" || password.value === "") {
        alert ('Please fill in the blanks!');
        
     } else {const forms = {
        email: email.value,
        password: password.value,};}
     event.currentTarget.reset();
});
console.log(form);
