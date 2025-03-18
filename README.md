URL Shortener

step 1: install dependencies
npm install

step 2: set up environment variables
create .env file
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.mongodb.net/url_shortener
PORT=5001
replace the username and password

step 3: start the server
npm start

step 4: open Postman to test API
POST	/api/shorten	Create a short URL
GET	/api/urls	Get all stored URLs