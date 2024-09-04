const express = require("express");
const cors = require("cors"); // For cross-origin requests
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");

const app = express();
app.use(express.json());
dotenv.config();

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server is connected to DB");
  } catch (error) {
    console.error("Server in not connected to Database", error.message);
  }
};

connectDB();

app.get("/", (req, res) => {
  res.send("API is Running ...");
});
app.use("/user", userRoute);

const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server is Running on Port: ${PORT}`));
