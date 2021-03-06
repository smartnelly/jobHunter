const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// for having environment variables in the .env file
require("dotenv").config();

const app = express();
// make the server listen on whatever is in the environment variable PORT, or 5000 if there's nothing there
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// connecting to MongoDB Atlas
const uri =
  "mongodb+srv://smartnelly:Nelly524!@cluster0.supul.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// load the routers and add them as middleware.
const jobsRouter = require("./routes/jobs");
const companiesRouter = require("./routes/companies");
const userRouter = require("./routes/user");
app.use("/jobs", jobsRouter);
app.use("/companies", companiesRouter);
app.use("/auth", userRouter);

// server starts to listen on a certain port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
