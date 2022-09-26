const { Banners } = require("../model/model");

const bannersController = {
  addBanners: async (req, res) => {
    try {
      let sampleFile;
      let uploadPath;
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No files were uploaded.");
      }
      sampleFile = req.files.sampleFile;
      uploadPath = __dirname + "../public/img" + sampleFile.name;
      sampleFile.mv(uploadPath);
      const newBanners = new Banners(req.body);
      const savedBanners = await newBanners.save();
      res.status(200).json(savedBanners);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllBanners: async (req, res) => {
    try {
      const banners = await Banners.find().sort({ createdAt: -1 });
      res.status(200).json(banners);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findBanners: async (req, res) => {
    try {
      const banners = await Banners.findById(req.params.id);
      res.status(200).json(banners);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateBanners: async (req, res) => {
    try {
      const banners = await Banners.findById(req.params.id);
      await banners.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteBanners: async (req, res) => {
    try {
      await Banners.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = bannersController;
