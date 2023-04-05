const scheduleButton = document.querySelector(".contact-button")
const AnotherScheduleButton = document.querySelector(".another-contact")
const formContainer = document.querySelector("#contact-form")
const sucessMessage = document.querySelector(".sucess-message")
const form = document.querySelector(".contact-form")

scheduleButton.addEventListener("click", showMessage)

AnotherScheduleButton.addEventListener("click", showForm)

function showMessage(e){
    e.preventDefault()
    if(form.checkValidity()){
        formContainer.style.display = "none"
        sucessMessage.style.display = "block"
        form.reset()
    }else{
        form.classList.add("was-validated")
    }

}

function showForm(){
    formContainer.style.display = "block"
    sucessMessage.style.display = "none"
    form.classList.remove("was-validated")
}
