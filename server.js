require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running`);
});


/* --------- Endpoints --------- */
const googleSiteApiKey = process.env.GOOGLE_SITE_KEY;

app.get('/api-key', (req, res) => {
    res.json({ googleSiteApiKey });
});   