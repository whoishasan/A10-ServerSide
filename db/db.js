import mongoose from "mongoose";

const mongoDBConnection = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGO_DB_URL}/crowd_stream`
    );
    console.log(
      `Mongo DB Connection Succesfull To ${conn.connection.db.databaseName}`
    );
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export default mongoDBConnection;
