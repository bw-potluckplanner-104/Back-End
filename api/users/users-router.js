const router = require("express").Router();
const userModel = require("./users-model");
const { checkUserId } = require("../middleware/router-middlware");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await userModel.getUsers());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkUserId(), async (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", checkUserId(), async (req, res, next) => {
  try {
    res.status(200).json({
      message: `${await userModel.removeUser(req.user.id)} file(s) removed.`,
    });
  } catch (err) {
    next(err);
  }
});
module.exports = router;
