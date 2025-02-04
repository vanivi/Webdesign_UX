$(function () {
  $("#error_name").hide();
  $("#error_email").hide();
  $("#error_pass").hide();

  var error_name = false;
  var error_email = false;
  var error_password = false;

  $("#form_name").focusout(function () {
    check_name();
  });
  $("#form_email").focusout(function () {
    check_email();
  });
  $("#form_password").focusout(function () {
    check_password();
  });
  function check_name() {
    var pattern = /^[a-zA-Z]+$/;
    var name = $("#form_name").val();
    if (pattern.test(name) && name !== "") {
      $("#error_name").hide();
      $("#form_name").css("border-bottom", "2px solid #34F458");
    } else {
      $("#error_name").html("Kindly enter only characters");
      $("#error_name").show();
      $("#form_name").css("border-bottom", "2px solid #F90A0A");
      error_name = true;
    }
  }
  function check_email() {
    var pattern = /[a-z0-9]+@northeastern.edu/;
    var email = $("#form_email").val();
    if (pattern.test(email) && email !== "") {
      $("#error_email").hide();
      $("#form_email").css("border-bottom", "2px solid #34F458");
    } else {
      $("#error_email").html("Enter a valid email");
      $("#error_email").show();
      $("#form_email").css("border-bottom", "2px solid #F90A0A");
      error_email = true;
    }
  }
  function check_password() {
    var password_length = $("#form_password").val().length;
    if (password_length < 5) {
      $("#error_pass").html("Please enter atleast 5 characters");
      $("#error_pass").show();
      $("#form_password").css("border-bottom", "2px solid #F90A0A");
      error_password = true;
    } else {
      $("#error_pass").hide();
      $("#form_password").css("border-bottom", "2px solid #34F458");
    }
  }
  $("#submit_form").submit(function () {
    error_name = false;
    error_email = false;
    error_password = false;

    check_name();
    check_email();
    check_password();

    if (
      error_name === false &&
      error_email === false &&
      error_password === false
    ) {
      window.location = "calc.html?form_name=" + form_name;
      alert("Details Submitted Successfully!");
      return true;
    } else {
      alert("Please fill the form correctly!");
      return false;
    }
  });
});
