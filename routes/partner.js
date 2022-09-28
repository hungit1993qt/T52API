const partnerController = require("../controllers/partnerController");
const uploadPicture = require("../middleware/uploadPicture");
const router = require("express").Router();

router.post("/", uploadPicture.single("img"), partnerController.addPartner);
router.get("/", partnerController.getAllPartner);
router.get("/:key", partnerController.findPartner);
router.put("/:id", partnerController.updatePartner);
router.delete("/:id", partnerController.deletePartner);
module.exports = router;
