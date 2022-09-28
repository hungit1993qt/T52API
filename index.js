const express = require("express");
const { engine } = require("express-handlebars");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const clientRoute = require("./routes/client");
const storeRoute = require("./routes/store");
const partnerRoute = require("./routes/partner");
const newsRoute = require("./routes/news");
const mediasRoute = require("./routes/medias");
const managerRoute = require("./routes/manager");
const bannersRoute = require("./routes/banners");
const verifyToken = require("./middleware/verifyToken");

app.use(express.static(__dirname + "/"));
dotenv.config();
// connect database

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conect to mongo");
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server running...");
    });
  });

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(cookieParser());
app.use(morgan("common"));

//Template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("home");
});

//Routs
app.use("/t52/client/", verifyToken.verifyTokenAPI, clientRoute);
app.use("/t52/store/", verifyToken.verifyTokenAPI, storeRoute);
app.use("/t52/partner/", verifyToken.verifyTokenAPI, partnerRoute);
app.use("/t52/news/", verifyToken.verifyTokenAPI, newsRoute);
app.use("/t52/medias/", verifyToken.verifyTokenAPI, mediasRoute);
app.use("/t52/manager/", verifyToken.verifyTokenAPI, managerRoute);
app.use("/t52/banners/", verifyToken.verifyTokenAPI, bannersRoute);
