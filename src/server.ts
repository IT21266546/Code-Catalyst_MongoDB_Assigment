// Importing necessary modules and dependencies
import dotenv from 'dotenv';
import app from "./app";
import { connectMongoDB } from "./configs/mongodb";

// Load environment variables from the specified file
dotenv.config({ path: './config.env' });

// Extracting the port number from environment variables
const PORT = process.env.PORT;

let DB;

// Checking if both DATABASE and PASSWORD environment variables are present
if (process.env.DATABASE && process.env.PASSWORD) {
    // Constructing the database connection string by replacing placeholder with password
    DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);
    
    // Connecting to MongoDB using the constructed connection string
    (async () => connectMongoDB(DB))();
}

// Start the express app and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
