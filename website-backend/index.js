const express = require("express");
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Testireitti
app.get("/", (req, res) => {
  res.send("Backend toimii");
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Example POST route (optional)
app.post('/api/echo', (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(PORT, () => {
  console.log(`Serveri käynnissä portissa ${PORT}`);
});
