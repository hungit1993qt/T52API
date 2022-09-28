const bannersController = require("../controllers/bannersController");

const router = require("express").Router();
const upload = require("../middleware/uploadPicture");
const verifyToken = require("../middleware/verifyToken");

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  upload.single("img"),
  bannersController.addBanners
);
router.get("/", bannersController.getAllBanners);
router.get("/:key", bannersController.findBanners);
router.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  upload.single("img"),
  bannersController.updateBanners
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  bannersController.deleteBanners
);
module.exports = router;
