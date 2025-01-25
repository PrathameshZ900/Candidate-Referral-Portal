const express = require("express");
const cors = require("cors");

const { userRouter } = require("./routes/authRoutes");
const router = require("./routes/referralRoutes");
const { connectDB } = require("./config/db");

const app = express();


// Middleware
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200); // Preflight response
    }
    next();
});



const corsOptions = {
    origin: ['http://localhost:5173'], // Frontend's domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods to allow
    credentials: true, // Allow cookies and credentials
    allowedHeaders: ['Content-Type', 'Authorization'], // Include necessary headers
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests globally






// Routes
app.use("/api/auth", userRouter);
app.use("/api/referrals", router );

app.listen(5000, () => {
    // Connect to MongoDB
    connectDB();
    console.log("Server running on port 5000");
});

