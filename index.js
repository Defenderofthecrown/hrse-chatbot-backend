const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000; // <-- Hier definiert

app.use(cors({
  origin: 'http://localhost:5173'  // für lokale Entwicklung
}));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from HRSE Backend!' });
});

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