const express = require("express");
const dotenv = require("dotenv").config();
const contactroutes = require("./routes/contactRoutes");
const userroutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/api/contacts", contactroutes);
app.use("/api/users", userroutes);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is started on port ${port}`));
