const express = require('express');
const router = express.Router();
const models = require("../../models/schema");

router.post('/add-category', async (req, res) => {
    try {
        const { category } = req.body;

        const newCategory = new models.Category({ category });
        await newCategory.save();
        res.status(201).send(newCategory);
    } catch (error) {
        res.status(500).send({ message: 'Error adding category' });
    }
});

router.get('/categories', async (req, res) => {
    try {
        const categories = await models.Category.find();
        res.status(200).send(categories);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching categories' });
    }
});

module.exports = router;
