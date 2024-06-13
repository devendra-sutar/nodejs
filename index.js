var express = require('express');
var app = express();

// Respond with "changed not" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('welcome to  dev world');
});

// Listen to port 3000 by default or a port specified in the environment
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

