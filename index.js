const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from HRSE Backend!' });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});