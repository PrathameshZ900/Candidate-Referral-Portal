const express = require("express");
const cors = require("cors");

const { userRouter } = require("./routes/authRoutes");
const router = require("./routes/referralRoutes");
const { connectDB } = require("./config/db");

const app = express();


// Middleware
app.use(express.json())


const corsOptions = {
    origin: ['http://localhost:5173'], // Frontend's domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods to allow
    credentials: true, // Allow cookies and credentials
    allowedHeaders: ['Content-Type', 'Authorization'], // Include necessary headers
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests globally


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Allow frontend origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.status(200).send(); // Preflight request
    }
    next();
});




// Routes
app.use("/api/auth", userRouter);
app.use("/api/referrals", router );

app.listen(5000, () => {
    // Connect to MongoDB
    connectDB();
    console.log("Server running on port 5000");
});

