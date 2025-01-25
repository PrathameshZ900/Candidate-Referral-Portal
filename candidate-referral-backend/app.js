const express = require("express");
const cors = require("cors");

const { userRouter } = require("./routes/authRoutes");
const router = require("./routes/referralRoutes");
const { connectDB } = require("./config/db");

const app = express();


// Middleware
app.use(cors());
app.use(express.json())








// Routes
app.use("/api/auth", userRouter);
app.use("/api/referrals", router );

app.listen(5000, () => {
    // Connect to MongoDB
    connectDB();
    console.log("Server running on port 5000");
});

