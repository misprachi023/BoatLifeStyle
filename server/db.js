const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const connection = mongoose.connect(process.env.mongoURL);

module.exports = connection;


// apiKey.apiKey ="xsmtpsib-90b4fca418f8d080292b26b8ff375187cc0a4a10cef74c638691ddbf57c846d8-0EzbL1rFWChvBmfj";