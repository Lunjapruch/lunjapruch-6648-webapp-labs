const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 8082;


const fetchIpAddress = async () => {
  const response = await axios.get('https://httpbin.org/ip');
  return response.data.origin;
};

app.get('/ip', async (req, res) => {
  try {
    const ip = await fetchIpAddress();
    console.log(`IP address fetched: ${ip}`);
    res.json({ ip: ip, source: "httpbin.org" });
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch IP address",
      message: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});