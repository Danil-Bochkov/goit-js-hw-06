const loginFormEl = document.querySelector('.login-form');
let formObj = {};

loginFormEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements; 

  if (email.value === "" || password.value === "") {
      return alert("Все поля должны быть заполнены👊👊👊");
  }

  formObj = {Login: email.value, Password: password.value};
  console.log(formObj);
  event.currentTarget.reset();
}