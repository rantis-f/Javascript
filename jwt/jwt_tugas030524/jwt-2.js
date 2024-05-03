const jwt = require("jsonwebtoken");

const secretKey = "liburan";


function verifyJWTToken(token) {
  try {
      const decoded = jwt.verify(token, secretKey);
      if (!decoded.userId || !decoded.username || !decoded.address || !decoded.contactNumber) {
          throw new Error('Token tidak berisi informasi penting');
      }
      return decoded;
  } catch (error) {
      throw new Error('Token tidak valid: ' + error.message);
  }
}
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiUmFudGlzIiwiYWRkcmVzcyI6Ildlc3QgUGFzYW1hbiIsImNvbnRhY3ROdW1iZXIiOiIwODEyMzQ1Njc4OSIsImlhdCI6MTcxNDYzNzk5OCwiZXhwIjoxNzE0NzI0Mzk4fQ.4HvnuT7wLSQ2ue_2c7wPlYoOpnA_WtFNVFaAVUWrWaw';
try {
  const decodedPayload = verifyJWTToken(token);
  console.log("Token JWT valid. Informasi penting:", decodedPayload);
} catch (error) {
  console.error("Gagal memverifikasi token:", error.message);
}
