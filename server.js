const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/biterush")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use("/api/menu", require("./routes/menuRoutes"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});