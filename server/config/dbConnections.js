// dbConnections.js
const mongoose = require("mongoose");

exports.dbConnection = (URI) => {
  try {
    mongoose.connect(URI).then((data) => {
      console.log(
        "Database connected successfully to host",
        data.connection.host
      );
    });
  } catch (e) {
    console.log(e.message);
  }
};
