const jwt = require("jsonwebtoken");

const secretKey = "liburan";

function createToken(userId, username, contactNumber,) {
  const data = { id, name, classes, address, hobby };
  return jwt.sign(data, secretKey);
}
const arrUser = [
  {
    userId: 1,
    username: "Rantis",
    address: "West Pasaman",
    contactNumber: "08123456789",
  },
  {
    userId: 1,
    username: "Rantis",
    address: "West Pasaman",
    contactNumber: "08123456789",
  },
  {
    userId: 1,
    username: "Rantis",
    address: "West Pasaman",
    contactNumber: "08123456789",
  },
];

const arrTokens = [];
arrUser.forEach((user) => {
  const token = createToken(
    user.userId,
    user.username,
    user.address,
    user.contactNumber
  );
  arrTokens.push(token);
});
arrTokens.forEach((token, index) => {
  console.log(`Siswa dengan id ${index + 1}: menggunakan token: ${token} \n`);
});
