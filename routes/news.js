const newsController = require("../controllers/newsController");
const router = require("express").Router();
const uploadPicture = require("../middleware/uploadPicture");
const verifyToken = require("../middleware/verifyToken");

router.post(
  "/",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  upload.single("img"),
  newsController.addNews
);
router.get("/",verifyToken.verifyTokenAPI, newsController.getAllNews);
router.get("/:key",verifyToken.verifyTokenAPI, newsController.findNews);
router.put(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  upload.single("img"),
  newsController.updateNews
);
router.delete(
  "/:id",
  verifyToken.verifyTokenAPI,
  verifyToken.verifyTokenManager,
  newsController.deleteNews
);
module.exports = router;
