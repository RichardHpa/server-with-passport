const express = require('express');
require('dotenv').config();

const app = express();

app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    next();
});

// Routes

app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
