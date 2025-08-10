const express = require("express");
const router = express.Router();

router.post("/payment", async (req, res) => {
    try {
        const { amount } = req.body;

        if (!amount) {
            return res.status(400).json({ message: "Amount is required" });
        }

        // Simulated payment
        res.status(200).json({ message: "Payment processed", amount });
    } catch (err) {
        res.status(500).json({ message: "Payment failed" });
    }
});

module.exports = router;
