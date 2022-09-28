const clientController = require("../controllers/clientController");

const router = require("express").Router();

router.post("/", clientController.addClient);
router.get("/", clientController.getAllClient);
router.get("/:key", clientController.findClient);
router.get("/:from/:to", clientController.findClientByDate);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);
module.exports = router;
