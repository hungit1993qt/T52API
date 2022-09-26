const storeController = require("../controllers/StoreController");

const router = require("express").Router();

router.post("/", storeController.addStore);
router.get("/", storeController.getAllStore);
router.get("/:key", storeController.findStore);
router.put("/:id", storeController.updateStore);
router.delete("/:id", storeController.deleteStore);
module.exports = router;
