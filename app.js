const express = require('express');
require('dotenv').config();
const router = require('./router/router');
const corsMiddleware = require('./middlewares/cors');

const PORT = process.env.PORT;

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(router);

app.use((err, req, res, next) => {  //error handling
    const message = err || "internal error of the server";
    res.status(500).send(message);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});