const mongoose = require('mongoose');
const { nanoid } = require('nanoid');
const urlSchema = new mongoose.Schema({
    longUrl: { type: String, required: true },
    shortUrl: { type: String, unique: true, default: () => nanoid(7) },
    clicks: { type: Number, default: 0 }
});
module.exports = mongoose.model('Url', urlSchema);
