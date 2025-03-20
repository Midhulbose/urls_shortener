URL Shortener

A simple and efficient URL shortener built with Node.js, Express, MongoDB, and React.js. This application allows users to shorten long URLs, retrieve stored URLs, and redirect short links.

--------------------------------------------------
 Features
--------------------------------------------------
- Shorten long URLs
- Redirect short URLs to their original links
- Store URLs in MongoDB
- Retrieve all stored URLs
- Track click counts (optional)
- Copy shortened links easily
- Responsive frontend with React & Tailwind CSS

--------------------------------------------------
 Installation
--------------------------------------------------

1️⃣ Clone the Repository
-----------------------
git clone https://github.com/Midhulbose/urls_shortener.git
cd urls_shortener

2️⃣ Install Backend Dependencies
-------------------------------
npm install

3️⃣ Set Up Environment Variables
--------------------------------
Create a `.env` file and add:
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.mongodb.net/url_shortener
PORT=5001
BASE_URL=http://localhost:5001

(Replace USERNAME and PASSWORD with your actual MongoDB credentials.)

4️⃣ Start the Backend Server
----------------------------
npm start

Expected output:
Server running on port 5001
MongoDB Connected

--------------------------------------------------
 Frontend Setup
--------------------------------------------------

1️⃣ Navigate to the Frontend Folder
-----------------------
cd frontend

2️⃣ Install Frontend Dependencies
-------------------------------
npm install

3️⃣ Start the Frontend
----------------------
npm start

The frontend will be available at: http://localhost:3000

--------------------------------------------------
 API Endpoints
--------------------------------------------------

| Method | Endpoint       | Description |
|--------|---------------|-------------|
| POST   | /api/shorten  | Create a short URL |
| GET    | /api/urls     | Get all stored URLs |
| GET    | /:shortUrl    | Redirect to the original URL |

--------------------------------------------------
 Testing the API
--------------------------------------------------

Use Postman or cURL to test the API.

Shorten a URL (POST)
---------------------
Endpoint:
http://localhost:5001/api/shorten

Request Body:
{
  "longUrl": "https://example.com"
}

Response Example:
{
  "shortUrl": "http://localhost:5001/abc123"
}

Visit a Shortened URL (GET)
---------------------------
http://localhost:5001/abc123

Retrieve All URLs (GET)
-----------------------
http://localhost:5001/api/urls

--------------------------------------------------
 Deployment
--------------------------------------------------

You can deploy this project using:
- Backend: Render, Railway, or Heroku
- Frontend: Vercel or Netlify

--------------------------------------------------
 Author
--------------------------------------------------

Midhul Bose  
GitHub Profile: https://github.com/Midhulbose  



