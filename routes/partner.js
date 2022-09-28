const partnerController = require("../controllers/partnerController");
const uploadPicture = require("../middleware/uploadPicture");
const verifyToken = require("../middleware/verifyToken");
const router = require("express").Router();

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  uploadPicture.single("img"),
  partnerController.addPartner
);
router.get("/", partnerController.getAllPartner);
router.get("/:key", partnerController.findPartner);
router.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  uploadPicture.single("img"),
  partnerController.updatePartner
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  partnerController.deletePartner
);
module.exports = router;
