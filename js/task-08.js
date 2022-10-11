const form = document.querySelector('.login-form');

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    const  {
        elements: { email, password } 
    } = event.currentTarget;
    const formData = {
      email: email.value,
      password: password.value
    }
     console.log(formData);
     if (email.value === "" || password.value === "") {
        alert ('Please fill in the blanks!');
        
     } else {const forms = {
        email: email.value,
        password: password.value,};}
     event.currentTarget.reset();
     
});
console.log(form);
