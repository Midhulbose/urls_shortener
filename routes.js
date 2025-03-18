const express = require('express');
const Url = require('./urlModel');
const { nanoid } = require('nanoid');

const router = express.Router();

// POST /api/shorten - Create a short URL
router.post('/shorten', async (req, res) => {
    console.log("Request received:", req.body);  // Debugging log
    const { longUrl } = req.body;
    if (!longUrl) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const shortId = nanoid(7);
        const url = new Url({ longUrl, shortUrl: shortId });
        await url.save();
        console.log("✅ Short URL created:", shortId);  // Debugging log
        res.json({ shortUrl: `http://localhost:5001/${shortId}` });
    } catch (err) {
        console.error("❌ Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// GET /api/urls - Retrieve all stored URLs
router.get('/urls', async (req, res) => {
    try {
        const urls = await Url.find();
        res.json(urls);
    } catch (err) {
        console.error("❌ Error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
