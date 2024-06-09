const form = document.getElementById('form');
const button = document.getElementById('button');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
// Add a query selector to the error_icon class.
const errorIcon = document.querySelectorAll(".error_icon");
// Add a query selector to the error_msg class.
const errorMsg = document.querySelectorAll(".error_msg");
// Add a query selector to the password_toggle id.
const passwordToggle = document.querySelector(".password_toggle");

console.log(firstName);

// console.log(firstName, lastName, email, password);

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


passwordToggle.addEventListener("click", (ev)=>{

  if (password.type === "password"){
    password.type = "text";
    passwordToggle.classList.add("./images/eye-regular.svg");
    passwordToggle.classList.remove("./images/eye-slash-regular.svg");
  } else {
    password.type = "password";
    passwordToggle.classList.add("./images/eye-slash-regular.svg");
    passwordToggle.classList.remove("./images/eye-regular.svg");
  }
});


//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
