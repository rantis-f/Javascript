const jwt = require("jsonwebtoken");
const secretKey = "liburan";

function createHolidayToken(prayerTime, mealTime, familyTime) {
    const payload = {
        prayerTime: prayerTime,
        mealTime: mealTime,
        familyTime: familyTime,
    };

    const token = jwt.sign(payload, secretKey);

    return token;
}

function verifyHolidayToken(token) {
    try {
        const decoded = jwt.verify(token, secretKey,{ expiresIn: "1d" });
        return decoded; 
    } catch (error) {
        return null; 
    }
}


const prayerTime = '06:00 AM';
const mealTime = '12:00 PM';
const familyTime = '03:00 PM';

const holidayToken = createHolidayToken(prayerTime, mealTime, familyTime);
console.log("Token:", holidayToken);

const verifiedHoliday = verifyHolidayToken(holidayToken);
if (verifiedHoliday) {
    console.log("Jadwal Kegiatan:", verifiedHoliday);
} else {
    console.log("Token kadaluwarsa");
}
