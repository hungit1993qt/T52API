const managerController = require("../controllers/managerController");
const verifyToken = require("../middleware/verifyToken");
const router = require("express").Router();
router.post("/login", managerController.login);
router.post("/", verifyToken.verifyTokenAdmin, managerController.addManager);
router.get("/", verifyToken.verifyTokenAdmin, managerController.getAllManager);
router.get(
  "/:key",
  verifyToken.verifyTokenAdmin,
  verifyToken.verifyTokenAdmin,
  managerController.findManager
);
router.put(
  "/:id",
  verifyToken.verifyTokenAdmin,
  managerController.updateManager
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAdmin,
  managerController.deleteManager
);
module.exports = router;
