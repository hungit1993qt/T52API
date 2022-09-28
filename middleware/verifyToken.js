const jwt = require("jsonwebtoken");
const verifyToken = {
  verifyTokenMiddleware: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, manager) => {
        if (err) {
          res.status(403).json("Token không đúng");
        }
        res.manager = manager;
        next();
      });
    } else {
      res.status(401).json("Bạn chưa xác thực bằng token");
    }
  },
  verifyTokenAPI: (req, res, next) => {
    const token = req.headers.token;
    if (token) {
      const accessToken = token.split(" ")[1];
      if (accessToken == process.env.VERIFY_TOKEN) {
        next();
      } else {
        res.status(403).json("Token không đúng");
      }
    } else {
      res.status(401).json("Bạn chưa xác thực bằng token");
    }
  },
};
module.exports = verifyToken;
