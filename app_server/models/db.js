const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://brianrochecampos_db_user:5Qc6NNXJQl6EVyiR@cluster0.qhhnc6i.mongodb.net/travlr?appName=Cluster0';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected');
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
