const router = require("express").Router();
const listModel = require("./items-model");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await listModel.getItems());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const item = await listModel.getItemById(req.params.id);

    if (!item) {
      return res.status(404).json({
        message: "The item you are looking for does not exist",
      });
    }
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
});

// router.delete("/:id", async (req, res, next) => {
//   try {
//   } catch (error) {

//     next(err);
//   }
// });

module.exports = router;
