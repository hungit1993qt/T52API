const managerController = require("../controllers/managerController");
const router = require("express").Router();

router.post("/", managerController.addManager);
router.get("/", managerController.getAllManager);
router.get("/:key", managerController.findManager);
router.put("/:id", managerController.updateManager);
router.delete("/:id", managerController.deleteManager);
module.exports = router;
