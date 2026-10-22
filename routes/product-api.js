import express from "express";
const router = express.Router();
router.get("/products/all", (req, res) => {
    res.send("All Products");
});
export default router;