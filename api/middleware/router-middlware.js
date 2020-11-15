const bcrypt = require("bcryptjs");
const User = require("../users/users-model");

function restrict() {
  return async (req, res, next) => {
    try {
      if (!req.session || !req.session.user) {
        return res.status(401).json({
          message: "Inavlid credentials.",
        });
      }

      next();
    } catch (err) {
      next(err);
    }
  };
}

function checkUserId() {
  return async (req, res, next) => {
    try {
      const user = await User.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({
          message: "User not found.",
        });
      }

      req.user = user;
      next();
    } catch (err) {
      next(err);
    }
  };
}

function checkUserData(format) {
  return async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      switch (format) {
        case "signup":
          if (!username || !password || !email) {
            return res.status(401).json({
              message:
                "Please provide all three: email, username, and password.",
            });
          }
          const userSU = await User.findBy({ username });
          if (userSU) {
            return res.status(409).json({
              message: "Username is already taken.",
            });
          }
          req.user = {
            username,
            password,
            email,
          };
          break;
        case "login":
          if (!username || !password) {
            return res.status(401).json({
              message: "Username and Password required.",
            });
          }
          const userLI = await User.findBy({ username });
          if (!userLI) {
            return res.status(401).json({
              message: "Invalid login credentials.",
            });
          }
          const validPass = await bcrypt.compare(password, userLI.password);
          if (!validPass) {
            return res.status(401).json({
              message: "Invalid login credentials.",
            });
          }
          req.user = userLI;
          break;
      }
      next();
    } catch (err) {
      next(err);
    }
  };
}

module.exports = {
  restrict,
  checkUserId,
  checkUserData,
};
