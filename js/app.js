const submitButton = document.querySelector('button')
const textField = document.querySelector('input')


document.addEventListener('DOMContentLoaded', function() {
    submitButton.addEventListener('click', function() {
        console.log(textField.value);
    })
})