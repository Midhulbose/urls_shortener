import React, { useState } from "react";

const App = () => {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShorten = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();
      if (response.ok) {
        setShortUrl(data.shortUrl);
        setError("");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error shortening URL");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-xl font-bold mb-4">URL Shortener</h1>
        
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          placeholder="Enter URL"
          className="w-full p-2 border rounded mb-4"
        />
        
        <button
          onClick={handleShorten}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Shorten
        </button>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {shortUrl && (
          <div className="mt-4">
            <p className="text-lg">Shortened URL:</p>
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {shortUrl}
            </a>
            <button
              onClick={() => navigator.clipboard.writeText(shortUrl)}
              className="block mt-2 bg-gray-300 py-1 px-3 rounded"
            >
              Copy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
