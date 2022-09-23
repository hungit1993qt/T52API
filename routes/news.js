const newsController = require("../controllers/newsController");
const router = require("express").Router();

router.post("/", newsController.addNews);
router.get("/", newsController.getAllNews);
router.get("/:id", newsController.findNews);
router.put("/:id", newsController.updateNews);
router.delete("/:id", newsController.deleteNews);
module.exports = router;
