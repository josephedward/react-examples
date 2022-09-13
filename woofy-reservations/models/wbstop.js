const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//have to define this first 
const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

//string since you will be storing day of week ?
wbstopSchema= new Schema({
    location:{type: String, required:true},
    active_days:{type: [String], required:true},
    
})




const wbstop = mongoose.model("wbstop", wbstopSchema);


module.exports = wbstop;
// const wbLocationSchema= new Schema({
//     days_active:{type:[Date]}
// })
// const wbTimetableSchema= new Schema({

// })

// const wbLocation = mongoose.model("wbLocation", wbLocationSchema);
// const wbTimetable = mongoose.model("wbTimetable", wbTimetableSchema);


// module.exports = wbLocation,wbTimetable ;
