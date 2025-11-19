"use server"
import {db} from "@/config/db"

export const querySubmitAction = async (previousState, formData) =>{
    try {
    const { name, email, subject,  message } = Object.fromEntries(formData.entries());
    const tableName = process.env.DB_PORTFOLIO_QUERY_SUBMIT_TABLE
      await db.execute(
        `INSERT INTO ${tableName} (name, email, subject, message) VALUES (?, ?, ?, ?)`,
        [name, email, subject, message]
      );
  
    return { success: true, message: "Message Successfully Sent" };
    }
 catch (err) {
    if (err.message === "NEXT_REDIRECT") throw err;
    console.error(err);
    return { success: false, message: "Failed To Send message :(" };
  }
}