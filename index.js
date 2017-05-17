const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT || 5000, () => {
    console.log(`Express server listening on port ${PORT}`);
});