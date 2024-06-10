const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const errorIcon = document.querySelectorAll(".error_icon");
const errorMsg = document.querySelectorAll(".error_msg");
const passwordToggle = document.querySelector('.password_toggle');

console.log(firstName);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorMsg[0].classList.remove("hide");
    errorIcon[0].classList.remove('hide'); 
  } else {
    firstName.classList.remove('error');
    errorMsg[0].classList.add("hide");
    errorIcon[0].classList.add('hide');
  }
  // Check last name
  if (lName === '') {
    lastName.classList.add('error');
    errorIcon[1].classList.remove('hide');
    errorMsg[1].classList.remove("hide")
  } else {
    lastName.classList.remove('error');
    errorIcon[1].classList.add('hide');
    errorMsg[1].classList.add("hide")
  }
  // Check email
  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorIcon[2].classList.remove('hide');
    errorMsg[2].classList.remove("hide")
  } else {
    email.classList.remove('error');
    errorIcon[2].classList.add('hide');
    errorMsg[2].classList.add("hide")
  }
  // Check password
  if (passwordVal === '') {
    password.classList.add('error');
    errorIcon[3].classList.remove('hide');
    errorMsg[3].classList.remove("hide")
  } else {
    password.classList.remove('error');
    errorIcon[3].classList.add('hide');
    errorMsg[3].classList.add("hide")
  }
});

passwordToggle.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    passwordToggle.innerHTML = '<img src="./images/eye-regular.svg" alt="Hide Password" />';
  } else {
    password.type = "password";
    passwordToggle.innerHTML = '<img src="./images/eye-slash-regular.svg" alt="Show Password" />';
  }
});

// Validate email
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
