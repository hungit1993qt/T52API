const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const clientRoute = require("./routes/client");
const storeRoute = require("./routes/store");
const partnerRoute = require("./routes/partner");
const newsRoute = require("./routes/news");
const managerRoute = require("./routes/manager");

dotenv.config();
// connect database
mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("conect to mongo");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//Routs
app.use("/v1/client/", clientRoute);
app.use("/v1/store/", storeRoute);
app.use("/v1/partner/", partnerRoute);
app.use("/v1/news/", newsRoute);
app.use("/v1/manager/", managerRoute);

app.listen(8000, () => {
  console.log("Server running...");
});
