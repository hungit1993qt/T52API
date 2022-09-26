const bannersController = require("../controllers/bannersController");

const router = require("express").Router();

router.post("/", bannersController.addBanners);
router.get("/", bannersController.getAllBanners);
router.get("/:id", bannersController.findBanners);
router.put("/:id", bannersController.updateBanners);
router.delete("/:id", bannersController.deleteBanners);
module.exports = router;
