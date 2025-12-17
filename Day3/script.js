const loginForm = document.getElementById("login_form")

loginForm.addEventListener("submit", e => {
    e.preventDefault()

    let email = document.getElementById("logemail")
    let pass = document.getElementById("logpsd")

    let emailError = document.getElementById("emailErr")
    let psdError = document.getElementById("passErr")

    let validDone = true

    
    if (email.value.trim() === "" || !email.value.includes("@")) {
        email.classList.add("is-invalid")
        email.classList.remove("is-valid")
        emailError.innerText = "Please enter a valid email!"
        validDone = false
    } else {
        email.classList.remove("is-invalid")
        email.classList.add("is-valid")
        emailError.innerText = ""
    }

  if (pass.value.length < 6) {
        pass.classList.add("is-invalid")
        pass.classList.remove("is-valid")
        psdError.innerText = "Password length must be at least 6 characters!"
        validDone = false
    } else {
        pass.classList.remove("is-invalid")
        pass.classList.add("is-valid")
        psdError.innerText = ""
    }


    if (validDone) {
        alert("Login Successful!!")
    }
})
