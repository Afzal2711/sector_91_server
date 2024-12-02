import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
    .then(() => console.log("Connected to momgodb Atlas"))
    .catch((error) => console.error("Error connecting to Mongodb: ", error));

app.listen(PORT, () => console.log("server running on port ${PORT}"));

app.get("/", (req, res) => {
    res.send("API is running...")
});