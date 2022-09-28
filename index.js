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
const verifyTokenAPI = require("./middleware/verifyTokenAPI");

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
app.use(
  "/t52/client/",
  verifyTokenAPI.verifyTokenAPIMiddleware,
  clientRoute
);
app.use(
  "/t52/store/",
  verifyTokenAPI.verifyTokenAPIMiddleware,
  storeRoute
);
app.use(
  "/t52/partner/",
  verifyTokenAPI.verifyTokenAPIMiddleware,
  partnerRoute
);
app.use(
  "/t52/news/",
  verifyTokenAPI.verifyTokenAPIMiddleware,
  newsRoute
);
app.use(
  "/t52/medias/",
  verifyTokenAPI.verifyTokenAPIMiddleware,
  mediasRoute
);
app.use(
  "/t52/manager/",
  verifyTokenAPI.verifyTokenAPIMiddleware,
  managerRoute
);
app.use(
  "/t52/banners/",
  verifyTokenAPI.verifyTokenAPIMiddleware,
  bannersRoute
);
