const cors = require("cors")

const corsMiddleware = cors({
    origin: ["https://localhost:5173"]
})

module.exports = corsMiddleware