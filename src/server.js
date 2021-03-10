require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT;

const app = express();

//Routes
const authRoutes = require('./routes/auth');

//MongoDB Connection
mongoose.connect(process.env.MONGO_URL + process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => {
    console.log("Database connected successfully");
})

app.use(cors());
app.use(bodyParser.json());
app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log("Server is running port " + PORT);
});

