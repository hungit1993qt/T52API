const jwt = require("jsonwebtoken");
const verifyTokenAPI = {
  verifyTokenMiddleware: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, manager) => {
        if (err) {
          res.status(403).json("Token is not valid");
        }
        res.manager = manager;
        next();
      });
    } else {
      res.status(401).json("You are not authenticated");
    }
  },
  verifyTokenAPIMiddleware: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      if (accessToken == process.env.VERIFY_TOKEN) {
        next();
      } else {
        res.status(403).json("Token is not valid");
      }
    } else {
      res.status(401).json("You are not authenticated");
    }
  },
};
module.exports = verifyTokenAPI;
