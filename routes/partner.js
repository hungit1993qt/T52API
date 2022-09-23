const partnerController = require("../controllers/partnerController");

const router = require("express").Router();

router.post("/", partnerController.addPartner);
router.get("/", partnerController.getAllPartner);
router.get("/:id", partnerController.findPartner);
router.put("/:id", partnerController.updatePartner);
router.delete("/:id", partnerController.deletePartner);
module.exports = router;
