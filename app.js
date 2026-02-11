const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Example route
app.get('/api', (req, res) => {
    res.send({ message: 'Hello from Node.js App!' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

