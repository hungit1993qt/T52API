const mediasController = require("../controllers/mediasController");
const router = require("express").Router();
const uploadVideo = require("../middleware/uploadVideo");

router.post("/", uploadVideo.single("urlVideo"), mediasController.addMedias);
router.get("/", mediasController.getAllMedias);
router.get("/:id", mediasController.findMedias);
router.put("/:id", mediasController.updateMedias);
router.delete("/:id", mediasController.deleteMedias);
module.exports = router;
