const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");
const { join } = require("path");

// const users = require("./routes/api/usersAPI");
// console.log(process.env);

// console.log(process.env.REACT_APP_TEST)
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use("/",routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/woofywellnessranch",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

app.use(express.static(join(__dirname, "build")));

app.use((_, res) => {
  res.sendFile(join(__dirname, "build", "index.html"));
  });

// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("./config/passport")(passport);
// // Routes
// app.use("/api/users", users);


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



// seedWoofyBusTable.seedCommand();
// // app.get(‘/dalembert’, callD_alembert)
// function callD_alembert(req, res) {
//   // using spawn instead of exec, prefer a stream over a buffer
//   // to avoid maxBuffer issue
//   var spawn = require(“child_process”).spawn;
//   var process = spawn(‘python’, [“./d_alembert.py”,
//     req.query.funds, // starting funds
//     req.query.size, // (initial) wager size
//     req.query.count, // wager count — number of wagers per sim
//     req.query.sims // number of simulations
//   ]);
//   process.stdout.on(‘data’, function (data) {
//     res.send(data.toString());
//   });
// }