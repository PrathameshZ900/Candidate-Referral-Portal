const express = require("express");
const cors = require("cors");

const { userRouter } = require("./routes/authRoutes");
const router = require("./routes/referralRoutes");
const { connectDB } = require("./config/db");

const app = express();


// Middleware
app.use(express.json())


const corsOptions = {
    origin: ['http://localhost:5173'], // Replace with your frontend's domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // HTTP methods to allow
    credentials: true, // Include cookies in cross-origin requests if needed
};
app.use(cors(corsOptions));

app.options('*', cors(corsOptions)); // Allow preflight for all routes





// Routes
app.use("/api/auth", userRouter);
app.use("/api/referrals", router );

app.listen(5000, () => {
    // Connect to MongoDB
    connectDB();
    console.log("Server running on port 5000");
});

