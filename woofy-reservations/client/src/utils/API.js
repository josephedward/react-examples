import axios from "axios";

export default {
  // Gets all reservations
  getreservations: function() {
    return axios.get("/api/reservations");
  },
  // Gets the reservation with the given id
  getreservation: function(id) {
    return axios.get("/api/reservations/" + id);
  },
  // Deletes the reservation with the given id
  deletereservation: function(id) {
    return axios.delete("/api/reservations/" + id);
  },
  // Saves a reservation to the database
  savereservation: function(reservationData) {
    return axios.post("/api/reservations", reservationData);
  },


 // Gets all wbstops
 getwbstops: function() {
  return axios.get("/api/wbstops");
},
// Gets the wbstop with the given id
getwbstop: function(id) {
  return axios.get("/api/wbstops/" + id);
},
// Deletes the wbstop with the given id
deletewbstop: function(id) {
  return axios.delete("/api/wbstops/" + id);
},
// Saves a wbstop to the database
savewbstop: function(wbstopData) {
  return axios.post("/api/wbstops", wbstopData);
},



/* what are the routes for auth0?  */


//  // Gets all users
//  getusers: function() {
//   return axios.get("/api/users");
// },
// // Gets the user with the given id
// getuser: function(id) {
//   return axios.get("/api/users/" + id);
// },
// // Deletes the user with the given id
// deleteuser: function(id) {
//   return axios.delete("/api/users/" + id);
// },
// // Saves a user to the database
// saveuser: function(userData) {
//   return axios.post("/api/users", userData);
// }





};
