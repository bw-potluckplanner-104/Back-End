const router = require("express").Router();
const Guest = require("./guest-model");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await Guest.find());
  } catch (err) {
    next(err);
  }
});

module.exports = router;
