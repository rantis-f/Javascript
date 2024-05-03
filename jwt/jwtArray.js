const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

function createToken(id, name, classes, address, hobby) {
  const data = { id, name, classes, address, hobby };
  return jwt.sign(data, secretKey);
}

const arrSiswa = [
  {
    id: 1,
    name: "Asep",
    classes: "XI",
    address: "Jakarta",
    hobby: "Main Bola",
  },
  {
    id: 2,
    name: "Jamal",
    classes: "XI",
    address: "Lampung",
    hobby: "Badminton",
  },
  {
    id: 3,
    name: "Udin",
    classes: "XI",
    address: "Sulawesi",
    hobby: "Main Voli",
  },
];

const arrTokens = [];

// membuat perulangan
arrSiswa.forEach((siswa) => {
  const token = createToken(
    siswa.id,
    siswa.name,
    siswa.classes,
    siswa.address,
    siswa.hobby
  );
  arrTokens.push(token);
});

// lakukan perulangan arrtokens
arrTokens.forEach((token, index) => {
  console.log(`Siswa dengan id ${index + 1}: menggunakan token: ${token} \n`);
});
