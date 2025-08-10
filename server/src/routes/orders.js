const express = require('express');
const router = express.Router();
const models = require("../../models/schema");

router.get('/orders', async (req, res) => {
    try {
        const orders = await models.Order.find().populate("user", "name email");
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: "Failed to get orders" });
    }
});

module.exports = router;
