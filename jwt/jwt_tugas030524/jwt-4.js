const jwt = require("jsonwebtoken");

const secretKey = "liburan";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmF5ZXJUaW1lIjoiMDY6MDAgQU0iLCJtZWFsVGltZSI6IjEyOjAwIFBNIiwiZmFtaWx5VGltZSI6IjAzOjAwIFBNIiwiaWF0IjoxNzE0NjM4ODYzfQ.DDUC5pxIbCQdUy0TP92DEITStAT9uUIqsUhAAMhQeWY';
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) console.error(err);
  else console.log("Token is valid");
  delete decoded.exp;
  delete decoded.iat;
  console.log(decoded);
});