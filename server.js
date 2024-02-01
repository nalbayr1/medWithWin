const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001; // Ensure this is different from your Next.js port

// Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json

// Example route (you can modify or remove this)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

// You can add more routes or server-side logic as needed.
