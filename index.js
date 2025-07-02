const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// CORS-Konfiguration explizit definieren
app.use(cors({
  origin: '*', // Für Entwicklung; später einschränken z. B. auf: 'http://localhost:5173'
}));

app.use(express.json());

// Testroute
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from HRSE Backend!' });
});

// Chat-Route
app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required' });
  }

  const botResponse = `Du hast gesagt: "${userMessage}"`;
  res.json({ reply: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});