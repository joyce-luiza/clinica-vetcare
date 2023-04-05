const scheduleButton = document.querySelector(".schedule-button")
const AnotherScheduleButton = document.querySelector(".another-schedule")
const formContainer = document.querySelector(".form-container")
const sucessMessage = document.querySelector(".sucess-message")
const form = document.querySelector(".main-form")

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
