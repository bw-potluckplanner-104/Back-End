const router = require("express").Router();
const userModel = require("./users-model");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await userModel.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await userModel.findById(req.params.id);

    if (!user) {
      res.status(404).json({
        message: "The user information you are looking for does not exist.",
      });
    }

    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const payload = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };

    if (!payload.email || !payload.username || !payload.password) {
      return res.status(401).json({
        message: "Please provide an email, username and password.",
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
