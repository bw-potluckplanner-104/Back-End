const router = require("express").Router();
const plModel = require("./potlucks-model");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await plModel.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const potluck = await plModel.findById(req.params.id);

    if (!potluck) {
      res.status(404).json({
        message: "The potluck information you are looking for does not exist.",
      });
    }

    res.status(200).json(potluck);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
