const jwt = require("jsonwebtoken");

const secretKey = "liburan";

function createToken(userId, username,address, contactNumber) {
  const data = { userId, username,address, contactNumber};
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
    userId: 2,
    username: "Ran",
    address: "West Pasaman",
    contactNumber: "08123456789",
  },
  {
    userId: 3,
    username: "Fayyadh",
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
  console.log(`User dengan id ${index + 1}: menggunakan token: ${token} \n`);
});
