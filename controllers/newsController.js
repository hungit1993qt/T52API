const { Manager, News } = require("../model/model");
const uploadPicture = require("../middleware/uploadPicture");
const NewsController = {
  addNews: async (req, res) => {
    try {
      const news = new News(req.body);
      if (req.file) {
        news.img = req.file.path;
      }
       uploadPicture.single("img")
      const savedNews = await news.save();
      if (req.body.personPost) {
        const manager = Manager.findById(req.body.personPost);
        await manager.updateOne({ $push: { news: savedNews._id } });
      }

      res.status(200).json(savedNews);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllNews: async (req, res) => {
    try {
      const news = await News.find()
        .sort({ createdAt: -1 })
        .populate("personPost");
      res.status(500).json(news);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findNews: async (req, res) => {
    try {
      const news = await News.find({
        $or: [
          {
            name: { $regex: req.params.key },
          },
        ],
      }).populate("personPost");
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateNews: async (req, res) => {
    try {
      const news = await News.findById(req.params.id);
      await news.updateOne({ $set: req.body });
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await Manager.updateMany(
        {
          news: req.params.id,
        },
        { $pull: { news: req.params.id } }
      );
      await News.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = NewsController;
