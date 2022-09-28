const storeController = require("../controllers/StoreController");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.addStore
);
router.get("/", verifyToken.verifyTokenAPI, storeController.getAllStore);
router.get("/:key", verifyToken.verifyTokenAPI, storeController.findStore);
router.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.updateStore
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.deleteStore
);
module.exports = router;
