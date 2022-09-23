const { Manager, News } = require("../model/model");
const managerController = {
  addManager: async (req, res) => {
    try {
      const newManager = new Manager(req.body);
      const savedManager = await newManager.save();
      res.status(200).json(savedManager);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllManager: async (req, res) => {
    try {
      const manager = await Manager.find().populate("news");
      res.status(200).json(manager);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findManager: async (req, res) => {
    try {
      const manager = await Manager.findById(req.params.id).populate("news");
      res.status(200).json(manager);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateManager: async (req, res) => {
    try {
      const manager = await Manager.findById(req.params.id);
      await manager.updateOne({ $set: req.body });
      res.status(200).json("Update successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteManager: async (req, res) => {
    try {
      await News.updateMany(
        { personPost: req.params.id },
        { personPost: null }
      );
      await Manager.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfully");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = managerController;
