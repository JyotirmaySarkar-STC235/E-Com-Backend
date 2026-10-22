import express from "express";
import cors from "cors";
import productApi from "./routes/product-api.js";

const app = express();
const port = 3000;

app.use(cors());

app.get("/health", (req, res) => {
    res.send("Healthy server");
});

app.use("/api", productApi);

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
