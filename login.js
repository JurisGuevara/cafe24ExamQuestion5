function field_focus(field, email){
    if(field.value == email)
    {
      field.value = '';
    }
}

function field_blur(field, email){
    if(field.value == '')
    {
      field.value = email;
    }
}

function login(){
    const email = document.getElementById("emailInput").value
    const password = document.getElementById("passwordInput").value
    const message = document.getElementById("validation-message")
    if(email === 'cafe24' && password === '1234'){
        message.style.color = "#00ff72"
        message.innerHTML = 'Login successful'
    }
    else{
        message.style.color = "red"
        message.innerHTML = 'Invalid username or password'
    }
}
