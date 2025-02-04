const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const cors = require("cors");
const app = express();
mongoose
  .connect(
    "mongodb+srv://vidhi:vidhi@cluster0.nojiudj.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to the database!");
  })
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.get("/api/user", (req, res, next) => {
  res.send("This is Express");
});
app.post("/user/create", (req, res) => {
  const user = new User({
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "Successfully added the User",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

app.get("/user/getAll", (req, res, next) => {
  User.find()
    .select(["-fullName"])
    .then((documents) => {
      res.status(200).json({
        message: "The user is fetched successfully",
        users: documents,
      });
    });
});

app.delete("/user/delete", (req, res, next) => {
  if (req.body.email) {
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0) {
        User.deleteOne({ email: req.body.email }).then((result) => {
          console.log(result);
          res.status(200).json({ message: "User successfully deleted" });
        });
      } else {
        res.status(200).json({ message: "Cannot find the User" });
      }
    });
  } else {
    res.status(200).json({ message: "Kindly provide the correct email" });
  }
});

app.put("/user/edit", (req, res, next) => {
  if (req.body.email) {
    User.find({ email: req.body.email }, (err, user) => {
      if (user.length > 0) {
        const newUser = new User({
          _id: user[0]._id,
          fullName: req.body.fullName,
          email: req.body.email,
          password: req.body.password,
        });
        User.findOneAndUpdate({ email: req.body.email }, newUser, {
          runValidators: true,
        })
          .then((result) => {
            console.log(result);
            res
              .status(200)
              .json({ message: "Details of User updated successfully" });
          })
          .catch((err) => {
            res.status(500).json({
              message: err.message,
            });
          });
      } else {
        res.status(200).json({ message: "Not a valid User" });
      }
    });
  } else {
    res.status(200).json({ message: "No email is provided" });
  }
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
