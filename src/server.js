require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT;
const USER = process.env.MONGO_USER;
const PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_DB = process.env.MONGO_DB;

const app = express();

//Routes
const authRoutes = require('./routes/auth');

//MongoDB Connection
mongoose.connect('mongodb+srv://' + USER + ':' + PASSWORD + '@cluster0.vmzfp.mongodb.net/myFirstDatabase?retryWrites=true/' + MONGO_DB, {
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

