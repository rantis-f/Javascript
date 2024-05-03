const jwt = require("jsonwebtoken");
const secretKey = "liburan";

function createToken(prayerTime, mealTime, familyTime) {
  const data = { prayerTime, mealTime, familyTime };
  return jwt.sign(data, secretKey);
}


const arrUser = [
  {
    userId: 1,
    username: "Rantis",
    prayerTime: "06:00 AM",
    mealTime: "12:00 PM",
    familyTime: "03:00 PM",
  },
  {
    userId: 2,
    username: "Kakak",
    prayerTime: "06:00 AM",
    mealTime: "12:00 PM",
    familyTime: "03:00 PM",
  },
  {
    userId: 3,
    username: "Adek",
    prayerTime: "06:00 AM",
    mealTime: "12:00 PM",
    familyTime: "03:00 PM",
  },
];
const arrTokens = [];
arrUser.forEach((user) => {
  const token = createToken(
    user.userId,
    user.username,
    user.prayerTime,
    user.mealTime,
    user.familyTime
  );
  arrTokens.push(token);
});
arrTokens.forEach((token, index) => {
  console.log(`User dengan id ${index + 1}: menggunakan token: ${token} \n`);
});
