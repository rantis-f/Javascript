const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
 
  
    jwt.verify(token, 'bazmaSecretKey', (err, user) => {
      if (err) {
        return res.status(401).json({
          message: 'Invalid token. Forbidden'
        });
      }
      req.user  = jwt.decoded;
      next();
    });
  };

module.exports = verifyToken;