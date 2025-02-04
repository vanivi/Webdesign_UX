const musicCheck = document.getElementById("music");
const selectCheckbox = document.getElementById("selectCheckbox");
const textWhy = document.getElementById("textWhy");
const musicComment = document.getElementById("musicComment");

var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

var validName = false;
var validEmail = false;
var validPhone = false;
var validAdd1 = false;
var validCity = false;
var validState = false;
var validZip = false;
var validationBool = false;
var validTitle = false;
var validationSource = false;

var regExName = /^[a-zA-Z]+$/;
var regExEmail = "[a-z0-9]+@northeastern.edu";
var regExPhone = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
var regExZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);

var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);

var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);

var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);

var streetAddress1 = document.getElementById("streetAddress1");
streetAddress1.addEventListener("input", validate);

var city = document.getElementById("city");
city.addEventListener("input", validate);

var state = document.getElementById("state");
state.addEventListener("input", validate);

var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

function validate(e) {
  var value = e.target.value;
  var type = this.id;
  var em = "error_" + type;
  var ems = "errors_" + type;

  switch (type) {
    case "firstName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validName = true;
      }
      break;
    case "lastName":
      if (!value.trim().match(regExName)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validName = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validName = true;
      }
      break;
    case "emailId":
      if (!value.trim().match(regExEmail)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validEmail = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validEmail = true;
      }
      break;
    case "phoneNumber":
      if (!value.trim().match(regExPhone)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validPhone = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validPhone = true;
      }
      break;
    case "streetAddress1":
      if (value.trim().length == 0) {
        document.getElementById(ems).style.display = "block";
        this.style.border = "2px solid red";
        validAdd1 = false;
      } else {
        document.getElementById(ems).style.display = "none";
        this.style.border = "";
        validAdd1 = true;
      }
      break;
    case "city":
      if (value.trim().length == 0) {
        document.getElementById(ems).style.display = "block";
        this.style.border = "2px solid red";
        validCity = false;
      } else {
        document.getElementById(ems).style.display = "none";
        this.style.border = "";
        validCity = true;
      }
      break;
    case "state":
      if (value.trim().length == 0) {
        document.getElementById(ems).style.display = "block";
        this.style.border = "2px solid red";
        validState = false;
      } else {
        document.getElementById(ems).style.display = "none";
        this.style.border = "";
        validState = true;
      }
      break;
    case "zipcode":
      if (!value.trim().match(regExZip)) {
        document.getElementById(em).style.display = "block";
        this.style.border = "2px solid red";
        validzipcode = false;
      } else {
        document.getElementById(em).style.display = "none";
        this.style.border = "";
        validzipcode = true;
      }
      break;
  }
}

musicCheck.onchange = (e) => {
  if (e.target.value == "jazz") {
    selectCheckbox.style.display = "block";
    textWhy.style.display = "none";

    selectCheckbox.innerHTML = `
    <p>Kindly choose your favourite Jazz Song</p>
    <input id="selectCheckbox1" class="selectCheckbox1" type='checkbox' name="source" value="Song1" /> Song 1
    <input id="selectCheckbox2" class="selectCheckbox2" type='checkbox' name="source" value="Song2" /> Song 2
    <br>`;

    const selectCheckbox1 = document.getElementById("selectCheckbox1");
    selectCheckbox1.addEventListener("click", () => {
      if (selectCheckbox1.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
    const selectCheckbox2 = document.getElementById("selectCheckbox2");
    selectCheckbox2.addEventListener("click", () => {
      if (selectCheckbox2.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
  }
  if (e.target.value == "bollywood") {
    selectCheckbox.style.display = "block";
    textWhy.style.display = "none";

    selectCheckbox.innerHTML = `
    <p>Kindly choose your favourite Bollywood Song</p>
    <input id="selectCheckbox1" class="selectCheckbox1" type='checkbox' name="source" value="Song1" /> Song 1
    <input id="selectCheckbox2" class="selectCheckbox2" type='checkbox' name="source" value="Song2" /> Song 2
    <br>`;

    const selectCheckbox1 = document.getElementById("selectCheckbox1");
    selectCheckbox1.addEventListener("click", () => {
      if (selectCheckbox1.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
    const selectCheckbox2 = document.getElementById("selectCheckbox2");
    selectCheckbox2.addEventListener("click", () => {
      if (selectCheckbox2.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
  }
  if (e.target.value == "kpop") {
    selectCheckbox.style.display = "block";
    textWhy.style.display = "none";

    selectCheckbox.innerHTML = `
    <p>Kindly choose your favourite Kpop Song</p>
    <input id="selectCheckbox1" class="selectCheckbox1" type='checkbox' name="source" value="Song1" /> Song 1
    <input id="selectCheckbox2" class="selectCheckbox2" type='checkbox' name="source" value="Song2" /> Song 2
    <br>`;

    const selectCheckbox1 = document.getElementById("selectCheckbox1");
    selectCheckbox1.addEventListener("click", () => {
      if (selectCheckbox1.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
    const selectCheckbox2 = document.getElementById("selectCheckbox2");
    selectCheckbox2.addEventListener("click", () => {
      if (selectCheckbox2.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
  }
  if (e.target.value == "rock") {
    selectCheckbox.style.display = "block";
    textWhy.style.display = "none";

    selectCheckbox.innerHTML = `
    <p>Kindly choose your favourite Rock Song</p>
    <input id="selectCheckbox1" class="selectCheckbox1" type='checkbox' name="source" value="Song1" /> Song 1
    <input id="selectCheckbox2" class="selectCheckbox2" type='checkbox' name="source" value="Song2" /> Song 2
    <br>`;

    const selectCheckbox1 = document.getElementById("selectCheckbox1");
    selectCheckbox1.addEventListener("click", () => {
      if (selectCheckbox1.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
    const selectCheckbox2 = document.getElementById("selectCheckbox2");
    selectCheckbox2.addEventListener("click", () => {
      if (selectCheckbox2.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
  }
  if (e.target.value == "rhythm") {
    selectCheckbox.style.display = "block";
    textWhy.style.display = "none";

    selectCheckbox.innerHTML = `
    <p>Kindly choose your favourite Rhythm and blues Song</p>
    <input id="selectCheckbox1" class="selectCheckbox1" type='checkbox' name="source" value="Song1" /> Song 1
    <input id="selectCheckbox2" class="selectCheckbox2" type='checkbox' name="source" value="Song2" /> Song 2
    <br>`;

    const selectCheckbox1 = document.getElementById("selectCheckbox1");
    selectCheckbox1.addEventListener("click", () => {
      if (selectCheckbox1.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
    const selectCheckbox2 = document.getElementById("selectCheckbox2");
    selectCheckbox2.addEventListener("click", () => {
      if (selectCheckbox2.checked) {
        textWhy.style.display = "block";

        if (musicComment.value.length == 0) {
          validatationBool = false;
        }
      } else {
        textWhy.style.display = "none";
      }
    });
  }
};
function submitted(e) {
  e.preventDefault();

  var cell1 = row.insertCell();
  x = document.getElementsByName("title");

  for (i = 0; i < x.length; i++) {
    if (x[i].checked) y = x[i].value;
  }
  cell1.innerHTML = y;

  var cell2 = row.insertCell();
  cell2.innerHTML = document.getElementById("firstName").value;

  var cell3 = row.insertCell();
  cell3.innerHTML = document.getElementById("lastName").value;

  var cell4 = row.insertCell();
  cell4.innerHTML = document.getElementById("emailId").value;

  var cell5 = row.insertCell();
  cell5.innerHTML = document.getElementById("phoneNumber").value;

  var cell6 = row.insertCell();
  cell6.innerHTML = document.getElementById("streetAddress1").value;

  var cell7 = row.insertCell();
  cell7.innerHTML = document.getElementById("streetAddress2").value;

  var cell8 = row.insertCell();
  cell8.innerHTML = document.getElementById("country").value;

  var cell9 = row.insertCell();
  cell9.innerHTML = document.getElementById("city").value;

  var cell10 = row.insertCell();
  cell10.innerHTML = document.getElementById("state").value;

  var cell11 = row.insertCell();
  cell11.innerHTML = document.getElementById("zipCode").value;

  var cell12 = row.insertCell();
  cell12.innerHTML = document.getElementById("drinks").value;

  var cell13 = row.insertCell();
  var checkboxes = document.getElementsByName("source");
  var values = "";
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      values += checkboxes[i].value + " " + " ";
    }
  }
  cell13.innerHTML = values;

  var cell14 = row.insertCell();
  cell14.innerHTML = document.getElementById("comments").value;

  document.getElementById("myForm").reset();
  var removecheck = document.getElementById("");

  let title;
  for (let i = 0; i < titles.length; i++) {
    if (titles[i].checked) {
      validTitle = true;
      title = titles[i].value;
    }
  }
  let sources = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i].checked) {
      validationSource = true;
      sources[i] = source[i].value;
    }
  }
  if (customisation.value.length != 0 && validationBool == false) {
    validationBool = true;
  }
  if (
    validationBool &&
    validTitle &&
    validationSource &&
    firstName.value != "" &&
    validFirstName &&
    lastName.value != "" &&
    validLastName &&
    emailId.value != "" &&
    validEmail &&
    phoneNumber.value != "" &&
    validPhone &&
    streetAddress1.value != "" &&
    validAdd1 &&
    city.value != "" &&
    validCity &&
    state.value != "" &&
    validState &&
    zipcode.value != "" &&
    validZip &&
    comments.value != ""
  ) {
    tableData.innerHTML += `
    <tr>
        <td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${
      document.getElementById("firstName").value
    } </td>
        <td>${document.getElementById("lastName").value}</td>
        <td>${document.getElementById("emailId").value}</td>
        <td>${document.getElementById("phoneNumber").value}</td>
        <td>${document.getElementById("streetAddress1").value}</td>
        <td>${document.getElementById("streetAddress2").value}</td>
        <td>${document.getElementById("city").value}</td>
        <td>${document.getElementById("state").value}</td>
        <td>${document.getElementById("zipcode").value}</td>
        <td>${sources}</td>
        <td>${document.getElementById("music").value}</td>
        <td>${document.getElementById("favourite").value}</td>
        <td>${document.getElementById("comments").value}</td>
    </tr>
    `;

    alert("Data is saved successfully!");
    form.reset();
    selectCheckbox.style.display = "none";
    additionalCustom.style.display = "none";

    selectCheckbox.innerHTML = "";
  } else {
    alert("Please enter proper data");
  }
}

document.getElementById("Reset").addEventListener("click", () => {
  form.reset();
  selectCheckbox.style.display = "none";
  additionalCustom.style.display = "none";

  selectCheckbox.innerHTML = "";
});
