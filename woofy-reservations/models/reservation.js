const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  dogname: { type: String, required: true },
  owner_name: { type: String, required: true },
  // date_made: { type: Date, default: Date.now },
  appointment_date_time: { type: Date, required: true, unique:true 
    }
});

const reservation = mongoose.model("reservation", reservationSchema);

module.exports = reservation;
