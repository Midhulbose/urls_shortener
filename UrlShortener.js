import { useState, useEffect } from "react";
import axios from "axios";

export default function UrlShortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrls, setShortUrls] = useState([]);
  const API_BASE = "http://localhost:5001/api";

  useEffect(() => {
    fetchUrls();
  }, []);

  const fetchUrls = async () => {
    try {
      const response = await axios.get(`${API_BASE}/urls`);
      setShortUrls(response.data);
    } catch (error) {
      console.error("Error fetching URLs", error);
    }
  };

  const shortenUrl = async () => {
    if (!longUrl) return;
    try {
      const response = await axios.post(`${API_BASE}/shorten`, { longUrl });
      setShortUrls([...shortUrls, { longUrl, shortUrl: response.data.shortUrl }]);
      setLongUrl("");
    } catch (error) {
      console.error("Error shortening URL", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">URL Shortener</h1>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter long URL"
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={shortenUrl}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Shorten URL
        </button>
      </div>
      <div className="mt-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-2">Shortened URLs</h2>
        <ul className="bg-white p-4 rounded-lg shadow">
          {shortUrls.map((url, index) => (
            <li key={index} className="mb-2">
              <a
                href={url.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {url.shortUrl}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
