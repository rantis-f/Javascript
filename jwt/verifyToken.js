const jwt = require("jsonwebtoken");
const { decode } = require("jsonwebtoken");

const secretKey = "smktibazma";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiUmFudGlzaSBGIiwia2VsYXMiOiJYSSIsImlhdCI6MTcxNDYzMjMyOH0.bbbQMyGoIkMuy65mUMGDL6nrnewFxLgjcfJH-08fXdU";

jwt.verify(token, secretKey, (err, decoded) => {
  if (err) console.error(err);
  else console.log("Token is valid");
  delete decoded.iat;
  console.log(decoded);
});
