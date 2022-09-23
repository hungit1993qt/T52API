const { Partner } = require("../model/model");
const partnerController = {
  addPartner: async (req, res) => {
    try {
      const newPartner = new Partner(req.body);
      const savedPartner = await newPartner.save();
      res.status(200).json(savedPartner);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllPartner: async (req, res) => {
    try {
      const store = await Partner.find();
      res.status(200).json(store);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  findPartner: async (req, res) => {
    try {
      const store = await Partner.findById(req.params.id);
      res.status(200).json(store);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updatePartner: async (req, res) => {
    try {
      const partner = await Partner.findById(req.params.id);
      await partner.updateOne({ $set: req.body });
      res.status(200).json("Update successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deletePartner: async (req, res) => {
    try {
      await Partner.findByIdAndDelete(req.params.id);
      res.status(200).json("Delete successfuly");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = partnerController;
