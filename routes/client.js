const clientController = require("../controllers/clientController");

const router = require("express").Router();

router.post("/", clientController.addClient);
router.get("/", clientController.getAllClient);
router.get("/:id", clientController.findClient);
router.put("/:id", clientController.updateClient);
router.delete("/:id", clientController.deleteClient);
module.exports = router;
