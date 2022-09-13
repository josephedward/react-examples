const mongoose = require("mongoose");
const db = require("../models");
 

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/woofywellnessranch"
);



// async function getGeos(){
const wbstopSeed = [

  {
    location:"4851 Lake Brook Dr.",
    active_days:["Monday", "Wednesday", "Friday"]
  },
  {
    location:"6606 West Broad St. ",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:"1000 Wilkes Ridge Pl.",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:"1001 Broad Branch Ln. ",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:"2401 E. Broad St",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:"Rockett's Landing",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:" 1310 Roseneath Rd.",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:"1001C Haxall Pt.",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:"9407 Kings Charter Dr.",
    active_days:["Monday", "Wednesday", "Friday"]
  },
  {
    location:"10854 Linderwood Dr. ",
    active_days:["Monday", "Wednesday", "Friday"]
  },
  {
    location:"8223 Center Path Ln. ",
    active_days:["Monday", "Wednesday", "Friday"]
  },
  {
    location:"414 Battle Dr.",
    active_days:["Tuesday", "Thursday"]
  },
  {
    location:" 11530 Nuckols Rd.",
    active_days:["Monday", "Wednesday", "Friday"]
  }

];


function seedCommand(){
db.wbstop
  .remove({})
  .then(() => db.wbstop.collection.insertMany(wbstopSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
}


seedCommand();

module.exports={seedCommand,wbstopSeed}