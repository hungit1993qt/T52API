const clientController = require("../controllers/clientController");
const verifyToken = require("../middleware/verifyToken");

const router = require("express").Router();

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  clientController.addClient
);
router.get("/", verifyToken.verifyTokenAPI, clientController.getAllClient);
router.get("/:key", verifyToken.verifyTokenAPI, clientController.findClient);
router.get(
  "/detail/:id",
  verifyToken.verifyTokenAPI,
  clientController.findClientDetail
);
router.get(
  "/:from/:to",
  verifyToken.verifyTokenAPI,
  clientController.findClientByDate
);
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
