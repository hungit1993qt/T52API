const clientController = require("../controllers/clientController");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.addClient
);
router.get("/", clientController.getAllClient);
router.get("/:key", clientController.findClient);
router.get("/:from/:to", clientController.findClientByDate);
router.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.updateClient
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.deleteClient
);
module.exports = router;
