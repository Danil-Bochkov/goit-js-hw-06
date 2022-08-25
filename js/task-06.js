const textInput = document.querySelector("#validation-input");
const lengOfInput = document.querySelector("[data-length='6']");

console.log(lengOfInput.dataset.length);

textInput.addEventListener("blur", () => {
    if (textInput.value.length == lengOfInput.dataset.length) {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
        
    }
});