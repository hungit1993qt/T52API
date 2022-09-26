const mediasController = require("../controllers/mediasController");
const router = require("express").Router();

router.post("/", mediasController.addMedias);
router.get("/", mediasController.getAllMedias);
router.get("/:id", mediasController.findMedias);
router.put("/:id", mediasController.updateMedias);
router.delete("/:id", mediasController.deleteMedias);
module.exports = router;
