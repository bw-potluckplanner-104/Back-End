const router = require("express").Router();
const Guest = require("./guest-model");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json(await Guest.find());
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req,res, next) => {
    try {
        const 
    } catch (error) {
        next(error)
    }
})

module.exports = router;
