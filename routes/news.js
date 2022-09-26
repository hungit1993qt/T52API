const newsController = require("../controllers/newsController");
const router = require("express").Router();
const uploadPicture = require("../middleware/uploadPicture");

router.post("/", uploadPicture.single("img"), newsController.addNews);
router.get("/", newsController.getAllNews);
router.get("/:key", newsController.findNews);
router.put("/:id", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);
module.exports = router;
