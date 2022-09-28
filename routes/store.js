const storeController = require("../controllers/StoreController");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  storeController.addStore
);
router.get("/", storeController.getAllStore);
router.get("/:key", storeController.findStore);
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
