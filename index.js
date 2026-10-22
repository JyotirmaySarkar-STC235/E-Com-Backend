import express from "express";
import cors from "cors";
import productApi from "./routes/product-api.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

connectDB();
app.use(cors());

app.get("/health", (req, res) => {
    res.send("Healthy server");
});

app.use("/api", productApi);

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
