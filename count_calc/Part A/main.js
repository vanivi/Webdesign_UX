$(document).ready(() => {
  $("#a").keyup((e) => {
    if ($.isNumeric($("#a").val()) == false) {
      alert("Kindly enter only numbers!");
      $("#a").val("");
    }
  });
  $("#b").keyup((e) => {
    if ($.isNumeric($("#b").val()) == false) {
      alert("Kindly enter only numbers!");
      $("#b").val("");
    }
  });
  $("#add").click((e) => {
    if ($("#a").val() == "" || $("#b").val() == "") {
      alert("Please enter both numbers");
      return;
    }
    let a = parseInt($("#a").val());
    let b = parseInt($("#b").val());
    let result = a + b;
    $("#result").val(result);
  });
  $("#subtract").click((e) => {
    if ($("#a").val() == "" || $("#b").val() == "") {
      alert("Please enter both numbers");
      return;
    }
    let a = parseInt($("#a").val());
    let b = parseInt($("#b").val());
    let result = a - b;
    $("#result").val(result);
  });
  $("#multiply").click((e) => {
    if ($("#a").val() == "" || $("#b").val() == "") {
      alert("Please enter both numbers");
      return;
    }
    let a = parseInt($("#a").val());
    let b = parseInt($("#b").val());
    let result = a * b;
    $("#result").val(result);
  });
  $("#divide").click((e) => {
    if ($("#a").val() == "" || $("#b").val() == "") {
      alert("Please enter both numbers");
      return;
    }
    let a = parseInt($("#a").val());
    let b = parseInt($("#b").val());
    let result = a / b;
    $("#result").val(result);
  });
});
