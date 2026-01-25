const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('./db');

const Trip = require('./trip');

const tripsPath = path.join(__dirname, '../data/trips.json');
const trips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

async function seedDatabase() {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
    console.log('Trips successfully added to database');
    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

seedDatabase();
