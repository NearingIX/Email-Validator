function validateEmail() {
  let text;
  let emailValue = document.getElementById("emailValue").value;

  if (/^\S+@\S+\.\S+$/.test(emailValue)) {
    text = "Valid email. You're good to go!";
  } else {
    text = "Invalid email. Try again!";
  }
  document.getElementById("textValid").innerHTML = text;
  document.getElementById('email').style.color = 'black';
}

document.getElementById("submitButton").onclick = validateEmail;

document.body.onkeydown = function(keyStroke) {
  if (keyStroke.keyCode == 13) validateEmail();
};