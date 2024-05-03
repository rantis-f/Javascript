const jwt = require("jsonwebtoken");

const secretKey = "liburan";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiUmFudGlzIiwiYWRkcmVzcyI6Ildlc3QgUGFzYW1hbiIsImNvbnRhY3ROdW1iZXIiOiIwODEyMzQ1Njc4OSIsImlhdCI6MTcxNDYzNzk5OCwiZXhwIjoxNzE0NzI0Mzk4fQ.4HvnuT7wLSQ2ue_2c7wPlYoOpnA_WtFNVFaAVUWrWaw';
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) console.error(err);
  else console.log("Token is valid");
  delete decoded.exp;
  delete decoded.iat;
  console.log(decoded);
});