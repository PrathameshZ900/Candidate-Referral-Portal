// const express = require("express");
// const cors = require("cors");

// const { userRouter } = require("./routes/authRoutes");
// const router = require("./routes/referralRoutes");
// const { connectDB } = require("./config/db");

// const app = express();

// // Middleware for parsing JSON
// app.use(express.json());

// // CORS Configuration
// // const corsOptions = {
// //     origin: 'http://localhost:5173', // Frontend's domain
// //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
// //     credentials: true, // Include cookies or credentials
// //     allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
// // };

// // Apply CORS middleware
// // app.use(cors(corsOptions));
// app.use(cors())


// // Handle preflight requests (OPTIONS)
// // app.options('*', cors(corsOptions));

// // Routes
// app.use("/api/auth", userRouter);
// app.use("/api/referrals", router);

// // Start server
// app.listen(5000, async () => {
//     await connectDB();
//     console.log("Server running on port 5000");
// });


const express = require("express");
const cors = require("cors");

const { userRouter } = require("./routes/authRoutes");
const router = require("./routes/referralRoutes");
const { connectDB } = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

// CORS Middleware
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed methods
    credentials: true, // Include credentials (e.g., cookies, headers)
}));

// Routes
app.use("/api/auth", userRouter);
app.use("/api/referrals", router);

// Start Server
app.listen(5000, async () => {
    await connectDB();
    console.log("Server running on port 5000");
});
