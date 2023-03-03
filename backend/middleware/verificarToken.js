const jwt = require("jsonwebtoken");
const verify = (req, res, next) => {
  const { token } = req.headers;
  const decoded = jwt.verify(token, "12345678");
  req.headers._id = decoded.usuario._id;
  next();
};
module.exports = verify;