const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",   // apna password daalna
    database: "vibely_db",
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
