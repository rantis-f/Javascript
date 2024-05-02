const jwt = require("jsonwebtoken");

const secretKey = "liburan";
const payload = {
  userId: 1,
  username: 'Rantis',
  address: 'West Pasaman',
  contactNumber: '08123456789'
};

const generateToken = jwt.sign(payload, secretKey,{ expiresIn: "1d" });
console.log("token:",generateToken);