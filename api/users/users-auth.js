const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("./users-model");
const { checkUserData } = require("../middleware/router-middlware");

router.post("/signup", checkUserData("signup"), async (req, res, next) => {
  try {
    // Add a new user with the information passed down from my middleware function.
    // Store it in a variable to pass to the response.
    // While adding the password to the payload object hash it (using bcryptjs' hash method) for security reasons.
    const newUser = await userModel.addUser({
      email: req.user.email,
      username: req.user.username,
      password: await bcrypt.hash(req.user.password, 15),
    });

    // Send the newly created user as the response with status code 201.
    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", checkUserData("login"), async (req, res, next) => {
  try {
    // Set the authorized user to session
    req.session.user = req.user;

    // Send user in response with status code 200.
    res.status(200).json(req.user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
