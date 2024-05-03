const jwt = require("jsonwebtoken");

const secretKey = "liburan";

function verifyJWTToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    if (!decoded.userId || !decoded.username || !decoded.prayerTime || !decoded.mealTime || !decoded.familyTime) {
      throw new Error('Token tidak berisi informasi penting');
    }
    return decoded;
  } catch (error) {
    throw new Error('Token tidak valid: ' + error.message);
  }
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmF5ZXJUaW1lIjoxLCJtZWFsVGltZSI6IlJhbnRpcyIsImZhbWlseVRpbWUiOiIwNjowMCBBTSIsImlhdCI6MTcxNDcyNDA5OX0.sp0I-zUEjpBTZo3URPcfhC7CslQvMhMEhokwUsyYpcQ';
try {
  const decodedPayload = verifyJWTToken(token);
  console.log("Token JWT valid. Informasi penting:", decodedPayload);
} catch (error) {
  console.error("Gagal memverifikasi token:", error.message);
}
