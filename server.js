require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Ensures API works with Postman & frontend
const urlRoutes = require('./routes');  // Import routes

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());  // Allows JSON body parsing

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.error('❌ MongoDB Connection Error:', err));

// Default Route (API status check)
app.get('/', (req, res) => {
  res.send('🚀 URL Shortener API is running...');
});

// API Routes
app.use('/api', urlRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
