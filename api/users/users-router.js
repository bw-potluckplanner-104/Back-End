const router = require("express").Router();
const userModel = require("./users-model");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await userModel.getUsers());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await userModel.getUserById(req.params.id);

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
module.exports = router;
