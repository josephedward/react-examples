const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/woofywellnessranch"
);

const reservationSeed = [
  {
    dogname: "Woofy",
    owner_name: "John Smith",
    // date_made: new Date(Date.now()),
    appointment_date_time: new Date('2020-09-27')
  },
  {
    dogname: "Buddy",
    owner_name: "Joan Smith",
    // date_made: new Date(Date.now()),
    appointment_date_time: new Date('2020-04-29')
  },
  {
    dogname: "Scout",
    owner_name: "Steve Jacobs",
    // date_made: new Date(Date.now()),
    appointment_date_time: new Date('2020-01-17')
  },
  {
    dogname: "Sparky",
    owner_name: "Stanley Goodman",
    // date_made: new Date(Date.now()),
    appointment_date_time: new Date('2020-12-23')
  }

];

db.reservation
  .remove({})
  .then(() => db.reservation.collection.insertMany(reservationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



