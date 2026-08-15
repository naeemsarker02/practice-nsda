document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  var successAlert = document.getElementById("formSuccessAlert");
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");

    var isValid = true;

    if (name.value.trim() === "") {
      name.classList.add("is-invalid");
      isValid = false;
    } else {
      name.classList.remove("is-invalid");
    }

    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("is-invalid");
      isValid = false;
    } else {
      email.classList.remove("is-invalid");
    }

    if (subject.value.trim() === "") {
      subject.classList.add("is-invalid");
      isValid = false;
    } else {
      subject.classList.remove("is-invalid");
    }

    if (message.value.trim() === "") {
      message.classList.add("is-invalid");
      isValid = false;
    } else {
      message.classList.remove("is-invalid");
    }

    if (isValid) {
      successAlert.classList.remove("d-none");
      form.reset();
    } else {
      successAlert.classList.add("d-none");
    }
  });
});
