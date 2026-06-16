const { MongoClient } = require("mongodb");
let db;
const connectDB = async () => {
    const uri = process.env.MONGO_URI || process.env.MONGO_URL;
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db(process.env.DB_NAME);
    console.log("DB connected");
};

const getDB = () => db;
module.exports = { 
    connectDB, 
    getDB,
};



