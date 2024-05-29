const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Add a query selector to the error_icon class.
  const errorIcon = document.querySelectorAll(".error_icon");

  // Check first name
  if (fName === '') {
    firstName.classList.add('error');
    errorIcon[0].classList.remove('hide');
  } else {
    firstName.classList.remove('error');
    errorIcon[0].classList.add('hide');
  }
  // Check last name

  if (lName === '') {
    lastName.classList.add('error');
    errorIcon[1].classList.remove('hide');
  } else {
    lastName.classList.remove('error');
    errorIcon[1].classList.add('hide');
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === '') {
    email.classList.add('error');
    errorIcon[2].classList.remove('hide');
  } else {
    email.classList.remove('error');
    errorIcon[2].classList.add('hide');
  }

  // Check password

  if (passwordVal === '') {
    password.classList.add('error');
    errorIcon[3].classList.remove('hide');
  } else {
    password.classList.remove('error');
    errorIcon[3].classList.add('hide');
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
