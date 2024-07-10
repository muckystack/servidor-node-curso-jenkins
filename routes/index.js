// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Ruta principal');
});

router.get('/about', (req, res) => {
    res.send('Acerca de');
});

module.exports = router;

