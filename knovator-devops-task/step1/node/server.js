const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/health', (req, res) => res.json({status: 'ok'}));
app.get('/api/hello', (req, res) => res.json({message: 'Hello from API'}));
app.listen(port, () => console.log(`API listening on port ${port}`));
