const {connection} = require("./Config/Connection.js");
const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function registerUser(name, email, password, phone) {
  try {
    // cek apakah email ini sudah terdaftar / belum?
    const [existingEmailUser] = await connection.query(
      "select * from user where email= ?",
      [email]
    );
    if (existingEmailUser.length > 0) throw new Error("Email already exists");
    // kita hash password agar tidak dapat  dibaca artinya pastikan yang kita tulis passwordnya hapal
    // jamal = 32424inknlasdlkdadk1213
    const hashedPassword = await bycrpt.hash(password, 16);

    // kalau tidak ada maka kita boleh buat email tersebut
    const [newUser] = await connection.query(
      "insert into user(username,email,password,phone) values (?,?,?,?)",
      [name, email, password, phone]
    );
    return {
      success: true,
      message: "User has been created",
      data: newUser
    };
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {registerUser}
