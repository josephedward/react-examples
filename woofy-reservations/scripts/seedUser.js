const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/woofywellnessranch");

const userSeed = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@email.com",
    dogname:"Clifford the Big Red Dog",
    password: "testPass"
  }
];

db.user.remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(
      data.result.n +
        " user records inserted into " +
        (process.env.MONGODB_URI || "mongodb://localhost/woofywellnessranch")
    );
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
