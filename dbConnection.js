const mongoose = require("mongoose");

const CONNECTION_STRING = 'mongodb://User:User@isit.my.to:27017/CmpWrld'

const connectDb = async () => {
  try {
    console.log(CONNECTION_STRING);

    const connect = await mongoose.connect(CONNECTION_STRING, {
      useNewUrlParser: true
    });

    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;

