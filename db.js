const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "217.21.87.103",
    user: "u205680228_deepak_321a",
    password: "Deepak8595",   // apna password daalna
    database: "u205680228_vibely",
});

// Check DB Connection
(async () => {
    try {
        await db.getConnection();
        console.log("Database Connected");
    } catch (error) {
        console.log("Database Connection Error: " + error);
    }
})();

module.exports = db;
