const managerController = require("../controllers/managerController");
const verifyToken = require("../middleware/verifyToken");
const router = require("express").Router();
router.post("/login", verifyToken.verifyTokenAPI, managerController.login);
router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenAdmin,
  managerController.addManager
);
router.get(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenAdmin,
  managerController.getAllManager
);
router.get(
  "/:key",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenAdmin,
  managerController.findManager
);
router.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenAdmin,
  managerController.updateManager
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenAdmin,
  managerController.deleteManager
);
module.exports = router;
