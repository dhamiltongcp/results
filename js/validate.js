function validate(mail) {

  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 if (mail.value.match(mailformat)) {
    alert("Login successful!");
    window.location.assign("index.html");
  } else {
    alert("You have entered an invalid email address!");
  }
}
