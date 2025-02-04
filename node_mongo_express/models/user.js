const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const passwordString = "somerandomstring";
const saltRounds = 10;

const validateEmail = (email) => {
  var re = /[a-z0-9]+@northeastern.edu/;
  return re.test(email);
};

const validatePass = (password) => {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return re.test(password);
};

const validateName = (fullName) => {
  var re = /^[a-zA-Z ]{2,30}$/;
  return re.test(fullName);
};

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    validate: [validateName, "Kindly enter a valid Name"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Kindly enter the valid Email ID"],
  },
  password: {
    type: String,
    required: true,
    validate: [validatePass, "Please enter a valid Password"],
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError);
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError);
          }

          user.password = hash;
          next();
        });
      }
    });
  } else {
    return next();
  }
});

module.exports = mongoose.model("User", userSchema);
