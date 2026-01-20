const express = require('express');

const app = express();

const PORT = 3000;

app.get('/',(req, res) => {
    res.send('Hello, Docker and Node.js!My name is Shabana. Nice to meet you.Have a great evening ');
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
