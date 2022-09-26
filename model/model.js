const mongoose = require("mongoose");

const PartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const bannersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const newsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    descript: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    newsType: {
      type: String,
      required: true,
    },
    personPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Manager",
    },
  },
  { timestamps: true }
);

const managerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  news: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "News",
    },
  ],
});

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    loanType: {
      type: String,
      required: true,
    },
    store: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Store",
    },
    isLoan: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    name: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
  },
  clients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
    },
  ],
});
let Banners = mongoose.model("Banners", bannersSchema);
let Store = mongoose.model("Store", StoreSchema);
let Manager = mongoose.model("Manager", managerSchema);
let Partner = mongoose.model("Partner", PartnerSchema);
let News = mongoose.model("News", newsSchema);
let Client = mongoose.model("Client", clientSchema);

module.exports = { Store, Manager, Partner, News, Client };
