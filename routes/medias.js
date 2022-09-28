const mediasController = require("../controllers/mediasController");
const verifyToken = require("../middleware/verifyToken");
const router = require("express").Router();

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  mediasController.addMedias
);
router.get("/", verifyToken.verifyTokenAPI,mediasController.getAllMedias);
router.get("/:key", verifyToken.verifyTokenAPI,mediasController.findMedias);
router.get("/:from/:to",verifyToken.verifyTokenAPI, mediasController.findMediasByDate);
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
