# URL Shortener

A simple URL Shortener built with Node.js, Express, and MongoDB. This application allows users to shorten long URLs and retrieve stored short URLs.

## Features
- Shorten long URLs
- Redirect short URLs to original links
- Store URLs in MongoDB
- Retrieve all stored URLs

## Installation

### Clone the Repository
```sh
git clone https://github.com/Midhulbose/urls_shortener.git
cd urls_shortener
```

### Install Dependencies
```sh
npm install
```

### Set Up Environment Variables
Create a `.env` file and add:
```sh
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.mongodb.net/url_shortener
PORT=5001
```
Replace `USERNAME` and `PASSWORD` with your MongoDB credentials.

### Start the Server
```sh
npm start
```
Expected output:
```
Server running on port 5001
MongoDB Connected
```

## API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/shorten` | Create a short URL |
| `GET`  | `/api/urls` | Get all stored URLs |
| `GET`  | `/:shortUrl` | Redirect to the original URL |

## Testing  
Use Postman to test the API:  

### Shorten a URL (POST)  
```
http://localhost:5001/api/shorten
```
```json
{
  "longUrl": "https://example.com"
}
```

### Visit a Shortened URL (GET)  
```
http://localhost:5001/abc123
```

### Retrieve All URLs (GET)  
```
http://localhost:5001/api/urls
```

## Deployment  
- Deploy using Render, Railway, or Vercel.

## Author  
Midhul Bose  
[GitHub Profile](https://github.com/Midhulbose)


Now, the README will be visible on GitHub.

