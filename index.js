const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.json());

// Test-Route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from HRSE Backend!' });
});

// NEU: Chat-Route
app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Platzhalterantwort
  const botResponse = `Du hast gesagt: "${userMessage}"`;

  res.json({ reply: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});