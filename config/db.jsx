import mysql from "mysql2/promise"

export const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

try {
    const connection = await db.getConnection()
    console.log("Connection successfully established..")
    connection.release()
} catch (err) {
    console.error("Failed to establish connection with database :(")
    process.exit(1)
}