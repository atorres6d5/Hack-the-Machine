const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

let port = 1234;
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://team2:P%40$$w0rd@10.194.91.117:27017';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log('Server is up and running on port numner ' + port);
});
