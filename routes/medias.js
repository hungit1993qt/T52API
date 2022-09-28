const mediasController = require("../controllers/mediasController");
const verifyToken = require("../middleware/verifyToken");
const router = require("express").Router();

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  mediasController.addMedias
);
router.get("/", mediasController.getAllMedias);
router.get("/:key", mediasController.findMedias);
router.get("/:from/:to", mediasController.findMediasByDate);
router.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  mediasController.updateMedias
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  mediasController.deleteMedias
);
module.exports = router;
