const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../users/users-model");

router.post("/signup", async (req, res, next) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(401).json({
        message: "Please provide an email, username and password.",
      });
    }

    const userExists = await userModel.findBy({ username });

    if (userExists) {
      return res.status(409).json({
        message: "Username is already taken.",
      });
    }

    const newUser = await userModel.add({
      email: email,
      username: username,
      password: await bcrypt.hash(password, 15),
    });

    res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(401).json({
        message: "Username and Password required.",
      });
    }
    const user = await userModel.findBy({ username }).first();

    if (!user) {
      return res.status(401).json({
        message: "Invalid login credentials.",
      });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(401).json({
        message: "Invalid login credentials.",
      });
    }

    // const token = jwt.sign(
    //   {
    //     userID: user.id,
    //     userRole: user.role,
    //   },
    //   process.env.JWS_SECRET
    // );

    // res.cookie("token", token);

    res.status(200).json({
      message: `Welcome, ${user.username}!`,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
