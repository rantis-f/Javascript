const jwt = require("jsonwebtoken");
const secretKey = "smktibazma";

function createToken(id, name, classes, address, hobby) {
  const data = { id, name, classes, address, hobby };
  return jwt.sign(data, secretKey);
}

function verify(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    delete decoded.iat;
    return decoded;
  } catch (err) {
    return null;
  }
}

const siswa = {
  id: 1,
  name: "Asep",
  kelas: "XI",
  address: "Bogor City",
  hobby: ["Coding php", "Coding js", "Coding express"],
};

const token = createToken(
  siswa.id,
  siswa.name,
  siswa.kelas,
  siswa.address,
  siswa.hobby
);
console.log("Token", token);

const decodedSiswa = verify(token);
console.log("decodedSiswa: ", decodedSiswa);
