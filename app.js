const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());

//import routes
const booksRoute = require('./routes/books');
app.use('/books', booksRoute);

const membersRoute = require('./routes/members');
app.use('/members', membersRoute);

const meetingsRoute = require('./routes/meetings');
app.use('/meetings', meetingsRoute);

//db connection
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
        console.log("connected to db!");
    }
);

app.listen(3000);